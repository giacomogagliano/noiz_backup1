"use client";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Header } from "../../components/Header";
import { FullPage } from "../../components/FullPage";

function calculatePadding() {
  let bkpoint = 0;
  if (window.innerWidth > 767) {
    bkpoint = window.innerHeight * 0.96;
  } else if (window.innerWidth < 767) {
    bkpoint = window.innerHeight * 0.85;
  }

  return bkpoint;
}

function index() {
  /**
   * CONTROL
   */
  const [scrollPosition, setScrollPosition] = useState(0);

  /**
   * GLOBAL ANIMATION BREAKPOINTS POSITIONS
   *
   */
  const [halfwbreakpoint, setHalfwbreakpoint] = useState(0);

  /**
   * NAVBAR ANIMATION TRIGGER
   *
   */
  // const [trigger1Top, setTrigger1Top] = useState(0);
  const [trigger1pos, setTrigger1pos] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [trigger1, setTrigger1] = useState("-100vw");

  /**
   * RASPBERRY BUTTON TRIGGER
   *
   */
  const [trigger2pos, setTrigger2pos] = useState(0);
  const [trigger2_opacity, setTrigger2_opacity] = useState(0);
  const [triggerButtonTransform, setTriggerButtonTransform] = useState("100%");
  const [obj, setObj] = useState({ op: 0, tr: "100%" });

  useEffect(() => {
    /**
     * GET ELEMENT BY id
     */
    const triggerElement1 = document.getElementById("trigger-1");
    const triggerButton = document.getElementById("button-effect");

    /**
     * CALCOLO PUNTO ESATTO ELEMENTO recuperato tramite id che ha nel tag dell'html nella pagina dove è posizionato.
     */
    const trigger1Top = triggerElement1.offsetTop;
    const trigger1 = trigger1Top - 500;
    const triggerButtonToTop = triggerButton.offsetTop;
    // const halfwbreakpoint = window.innerHeight / 2;

    let halfwbreakpoint = window.innerHeight / 2;
    if (window.innerWidth > 767) {
      halfwbreakpoint = window.innerHeight / 4;
    }
    /**
     * INIZIALIZZAZIONE TRIGGER
     */
    // setTrigger1Top(trigger1Top);
    setTrigger1pos(trigger1);
    setHalfwbreakpoint(halfwbreakpoint);
    setTrigger2pos(triggerButtonToTop);
    setTriggerButtonTransform(triggerButtonTransform);
    setHalfwbreakpoint(calculatePadding());
    /**
     * GET EVENT WHILE USING PAGE
     */
    window.addEventListener("scroll", () => {
      setScrollPosition(window.pageYOffset);
    });
    window.addEventListener("resize", () => {
      let halfwbreakpoint = calculatePadding();
      setHalfwbreakpoint(halfwbreakpoint);
    });
  }, []);
  useEffect(() => {
    const delta1 = -trigger1pos + scrollPosition;

    /**
     * NAVBAR ANIMATION
     */
    const condizione = delta1 > 0;
    const navbarTrigger = scrollPosition > 450;

    /**
     * RASPBERRY BUTTON ANIMATION
     */
    const padding = scrollPosition + halfwbreakpoint;
    const deltaButton = -trigger2pos + padding;
    const condizioneButton = deltaButton < 0;

    /**
     * CONDIZIONI SCATENANTE TRIGGER
     */
    if (condizione) {
      setTrigger1("0");
    }

    /**
     * CONDIZIONI SCATENANTE NAVBAR
     */
    if (navbarTrigger) {
      setIsNavbarVisible(true);
    } else setIsNavbarVisible(false);

    /**
     * CONDIZIONI SCATENANTE BUTTON-RASPBERRY
     */
    if (condizioneButton) {
      setTrigger2_opacity(0);
      setTriggerButtonTransform("100%");
    } else {
      //FORSE SE TOLGO QUESTO NON SCOMPARE QUANDO MI SPOSTO DA PROVARE
      setTrigger2_opacity(1);
      setTriggerButtonTransform("0");
    }
  }, [scrollPosition, halfwbreakpoint, trigger2pos, triggerButtonTransform]);

  return (
    <>
      <Header
        trigger1={trigger1}
        isNavbarVisible={isNavbarVisible}
        triggerButtonToTop={trigger2_opacity}
        triggerButtonTransform={triggerButtonTransform}
      ></Header>
      <FullPage></FullPage>
    </>
  );
}

export default index;
