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
    margin-top: 1rem;
    margin-bottom: 1rem;
    ul {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
      align-items: stretch;

      @media (min-width: 600px) and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 1000px) and (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
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
          <p>Status: </p>
          <p>{el.status}</p>
        </div>
      </div>
    );
  };

  StyledFolderCard = styled(this.FolderCard)`
    transition: translate ease-in-out 100ms,
      box-shadow ease-in-out 100ms;
    border: solid ${props => props.theme.borderColor};
    border-radius: 0.7rem;
    display: flex;
    flex-direction: column;
    min-width: 15rem;
    &:hover,
    &:focus {
      translate: 0 -5px;
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2);
      background-color: ${props =>
        props.theme.palette.blue};
      color: ${props => props.theme.palette.grey};
      a {
        color: ${props => props.theme.palette.grey};
      }
    }

    div {
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 5%;
      padding-bottom: 5%;
      display: inline-flex;
      justify-content: space-between;
    }
    a {
      margin-left: 2rem;
      &:hover {
        color: ${props => props.theme.palette.white};
      }
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
