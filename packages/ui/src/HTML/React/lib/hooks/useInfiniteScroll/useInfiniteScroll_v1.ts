import { useCallback, useRef, useState } from "react";
// import { BlogPost } from "../../../blog";

export interface useInfiniteScroll_v1<T> {
  isLoading: boolean;
  loadMoreCallback: (el: HTMLDivElement) => void;
  hasDynamicPosts: boolean;
  dynamicPosts: T[];
  isLastPage: boolean;
}

export const useInfiniteScroll_v1 = <T>(
  posts: T[]
): useInfiniteScroll_v1<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasDynamicPosts, setHasDynamicPosts] =
    useState(false);
  const [dynamicPosts, setDynamicPosts] =
    useState<T[]>(posts);
  const [isLastPage, setIsLastPage] = useState(false);
  const observerRef = useRef<IntersectionObserver>();
  const loadMoreTimeout: NodeJS.Timeout = setTimeout(
    () => null,
    500
  );
  const loadMoreTimeoutRef = useRef<NodeJS.Timeout>(
    loadMoreTimeout
  );

  const handleObserver = useCallback(
    (entries: any[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setIsLoading(true);
        clearTimeout(loadMoreTimeoutRef.current);

        // this timeout debounces the intersection events
        loadMoreTimeoutRef.current = setTimeout(() => {
          fetch(`/api/posts/${page}`).then(async resp => {
            let json = await resp.json();
            setPage(page + 1);
            const newPosts = json?.data["posts"];

            if (newPosts?.length) {
              const newDynamicPosts = [
                ...dynamicPosts,
                ...newPosts,
              ];
              setDynamicPosts(newDynamicPosts);
              setIsLastPage(
                newDynamicPosts?.length ===
                  json?.data["total"]
              );
              setHasDynamicPosts(true);
              setIsLoading(false);
            }
          });
        }, 500);
      }
    },
    [loadMoreTimeoutRef, setIsLoading, page, dynamicPosts]
  );

  const loadMoreCallback = useCallback(
    (el: HTMLDivElement) => {
      if (isLoading) return;
      if (observerRef.current)
        observerRef.current.disconnect();

      const option: IntersectionObserverInit = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };
      observerRef.current = new IntersectionObserver(
        handleObserver,
        option
      );

      if (el) observerRef.current.observe(el);
    },
    [handleObserver, isLoading]
  );

  return {
    isLoading,
    loadMoreCallback,
    hasDynamicPosts,
    dynamicPosts,
    isLastPage,
  };
};
