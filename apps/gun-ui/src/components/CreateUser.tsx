import styled from "styled-components";
import { IGunInstance } from "gun/types/gun/IGunInstance";
import * as elliptic from "elliptic";
import { encode } from "bech32-buffer";
import React, { createRef, FormEvent, RefObject } from "react";

const CreteUserStyle = styled.div`
  width: 60vw;
  display: grid;
  place-self: center;
  form {
    display: grid;
    place-self: center;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

interface User {
  username: string;
  eMail: string;
  password: string;
  encrypt(data, pair): this;
  sign(data, pair): this;
  verify(data, pair): this;
  decrypt(data, pair): this;
}

export interface CreateUserProps {
  node: IGunInstance<any>;
}
export interface CreateUserState {
  username: string;
  eMail: string;
  password: string;
}
export class CreateUser extends React.Component<
  CreateUserProps,
  CreateUserState
> {
  constructor(props: CreateUserProps) {
    super(props);
    this.state;
    this.username = createRef();
    this.password = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(): React.ReactNode {
    return (
      <CreteUserStyle>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              username:{" "}
              <input
                type="text"
                placeholder="username"
                ref={this.username}
              ></input>
            </label>
            <input type="submit"></input>
          </div>
          {/* <label>
            password:{" "}
            <input
              type="password"
              placeholder="password"
              ref={this.password}
            ></input>
          </label> */}
        </form>
      </CreteUserStyle>
    );
  }
  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const gun = this.props.node;
    if (gun.user) {
      const user = gun.user();
      let username: string, encodedPrivateKey: string;
      interface User {
        username_: string;
        publicKey_: string;
        privateKey_: string;
        encodedPubKey_: string;
        encodedPrivateKey_: string;
      }
      class User {
        constructor(props: User) {
          this.username_ = props.username_;
          this.publicKey_ = props.publicKey_;
          this.privateKey_ = props.publicKey_;
          this.encodedPubKey_ = props.encodedPubKey_;
          this.encodedPrivateKey_ = props.encodedPrivateKey_;
        }
      }
      // private
      // check if user exist in local storage
      let localStorageUser = localStorage.getItem("user");
      if (localStorageUser) {
        // retrieve user
        console.log("user exists in local storage");
        let { username_, encodedPrivateKey_ }: User =
          JSON.parse(localStorageUser);
        username = username_;
        encodedPrivateKey = encodedPrivateKey_;
      } else {
        console.log("user doesn't exist in local storage");
        const username_ = this.username.current.value;
        // if no user exists in localstorage create one
        // instantiate elliptic
        const ec = new elliptic.ec("secp256k1");
        // create Schnorr signature with secp256k1
        const keyPair = ec.genKeyPair();
        // get publickey
        const privateKey_ = keyPair.getPrivate().toString(16);
        // get privatekey
        const publicKey_ = keyPair.getPublic().encode("hex", true);
        // encode public key with bech32 for compatibility
        // with nostr
        const pubBuffer_ = Buffer.from(publicKey_, "hex");
        const encodedPubKey_ = encode("npub", pubBuffer_);
        // encode private with bech32 for compatibility with nostr
        const privBuffer_ = Buffer.from(privateKey_, "hex");
        const encodedPrivateKey_ = encode("nsec", privBuffer_);
        const newUser = new User({
          username_,
          publicKey_,
          privateKey_,
          encodedPubKey_,
          encodedPrivateKey_,
        });
        // creare user con privkey come password
        user.create(username_, encodedPrivateKey_, ack => {
          console.log(ack);
        });
        // salvare in local storage un oggetto con chiavi
        localStorage.setItem("user", JSON.stringify(newUser));
        // log user with credentials from localstorage
        username = username_;
        encodedPrivateKey = encodedPrivateKey_;
      }
      const loggedUser = user.auth(username, encodedPrivateKey);
      console.log(loggedUser);
    }
  }
  username: RefObject<HTMLInputElement>;
  password: RefObject<HTMLInputElement>;
}
