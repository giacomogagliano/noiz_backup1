import React, { Component } from "react";
import { Dati } from "@zionstate/database/Git";
import { join } from "path";
import styled from "styled-components";
import Link from "next/link";

interface FolderCardProps {
  className?: string;
  idx: number;
  jointpath: string;
  el: { name: string; status: string };
}

interface IndexPageProps {
  data: string;
  path?: string[];
}

export default class IndexPage extends Component<IndexPageProps> {
  static makeDati = (el: string) => {
    // const newDati = new Dati(el);
    const dati = new Dati();
    dati.name = el;
    dati.status = "working ✅";
    return dati;
  };
  static maker =
    (name: string, status: Dati["status"]) =>
    (el: Dati) => {
      if (el.name === name) {
        el.status = status;
      }
      return el;
    };
  static filter = (file: string) => (dir: string) => {
    if (dir === file) return false;
    else return true;
  };
  static setStatus = (
    file: Dati,
    status: Dati["status"]
  ) => {
    return (file.status = status);
  };

  static filterDs = IndexPage.filter(".DS_Store");
  static filterIndex = IndexPage.filter("index.tsx");

  constructor(props: IndexPageProps) {
    super(props);
  }

  Div = styled.div`
    display: grid;
    ul {
      display: grid;
      white-space: nowrap;
    }
  `;

  FolderCard = (props: FolderCardProps) => {
    const { idx, jointpath, el } = props;
    return (
      <div key={idx} className={props.className}>
        <div>
          <>Name: </>
          <Link href={`${jointpath}`}>{el.name}</Link>
        </div>
        <div>
          <>Status: </>
          <>{el.status}</>
        </div>
      </div>
    );
  };

  StyledFolderCard = styled(this.FolderCard)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    div {
      padding: 10%;
      border: solid;
    }
    a {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  `;

  render() {
    const { data, path } = this.props;
    const parsed = JSON.parse(data);
    const StyledCard = this.StyledFolderCard;
    const Div = this.Div;

    // console.log(parsed);
    return (
      <Div>
        <ul>
          {parsed.map((el: Dati, idx: number) => {
            let jointpath;
            if (path)
              jointpath = "/" + join(...path, el.name);
            else jointpath = "/" + join(el.name);
            return (
              <StyledCard
                el={el}
                idx={idx}
                jointpath={jointpath}
              ></StyledCard>
            );
          })}
        </ul>
      </Div>
    );
  }
}
