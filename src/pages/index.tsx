import * as React from "react";

import "normalize.css";
import "doppio";
import "../styles/index.css";

import { Curtain } from "../models/curtain";
import { useState, useEffect } from "react";
import { animate, delay } from "doppio";

import ocean from "../images/sea_woman.jpg";
import clover from "../images/clover.jpg";
import bed1 from "../images/bed1.jpg";
import onomichi from "../images/onomichi.jpg";
import liangePanel from "../images/liange_panel.jpg";
import cloverPicture from "../images/clover_picture.jpg";

import { beginTick } from "../models/beginAninationLoop";

import { Action, createStore, Feature } from "relux.js";
import { Provider, useObserver, useDispatch, useStore } from "react-relux";

// markup
export default () => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const [curtain, setCurtain] = useState<Curtain | null>(null);
    const main = React.useRef<HTMLDivElement | null>(null);

    async function init() {
        if (ref.current && main.current) {
            animate(main.current, "opacity", "0", 0);

            const c = new Curtain(ref.current, ["#468189", "#77aca2", "#9dbebb", "#c4cdc1", "#f4eace", "#dee1dd"], true);
            setCurtain(c);
            c.init();

            await delay(1000);
            await c.play("2.5px", 3200);
            animate(main.current, "opacity", "1", 1000, 1000);
        }
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <>
            <header className="d-flex" style={{ height: "132px" }}>
                <title className="mt-3">Home Page</title>
                <div className="flex-grow-1" />
                <div className="d-flex mx-4 my-12">
                    <a className="mx-2 active">TOP</a>
                    <a className="mx-2">NEWS</a>
                    <a className="mx-2" href="/menu">MENU</a>
                    <a className="mx-2">BLOG</a>
                    <a className="mx-2">ACCESS</a>
                </div>
            </header>
            <main ref={main} style={{ opacity: "0" }}>
                <MainPanel />
                <div className="white-panel"></div>
                <NewsPanel />
                <BlogsPanel />
            </main>
            <div className="curtain" ref={ref} />
        </>
    );
}

function MainPanel() {
    return (
        <article className="container">
            <section
                className="row"
                style={{ minHeight: "calc(100vh - 160px)" }}
            >
                {/* Content */}
                <section className="column col-11">
                    <section className="row" style={{ height: "100%" }}>
                        {/* description */}
                        <section className="col-12 col-sm-12 d-flex flex-column">
                            <div className="row align-center px-2">
                                <div className="column" />
                                <div className="column col-4 col-sm-8 d-flex flex-column">
                                    <h2 className="my-1 ml-4 font-logo2 font-weight-500">女性専用リラクゼーションサロン</h2>
                                    <h1 className="my-1 ml-4 font-logo z-index-1">Liange</h1>
                                </div>
                                <div className="column col-4 col-sm-4">
                                    <img style={{
                                        height: "80px",
                                        width: "80px",
                                        filter: "hue-rotate(27deg) grayscale(0.28)"
                                    }} src={clover} />
                                </div>
                            </div>
                            <div className="row strech-y align-center mt-4">
                                <div className="column col-2 col-sm-1">
                                    <h4 className="ma-2 ml-12" style={{
                                        writingMode: "vertical-rl",
                                        width: "40px",
                                        borderLeft: "2px solid currentColor",
                                    }}>Relaxation.</h4>
                                </div>
                                <div className="column col-10 col-sm-11">
                                    <h4 className="ma-2 ml-12 font-sm font-weight-500">リラクゼーションサロン</h4>
                                    <h2 className="ma-2 ml-12 font-lg font-weight-500">Liange　- リアンジュ -</h2>
                                    <p className="mt-6 mx-4" style={{ maxWidth: "680px" }}>
                                        大手エステサロンで17年の経験と実績を重ね、低価格にこだわったメニューを取り揃えました。<br />
                                        「エステは高いから…」と諦めていた方、日頃の疲れを癒したい方、綺麗になりたい方、それぞれの想いに寄り添いコースを提供致します。<br />
                                        マンションの一室にあるアットホームな空間により、お友達の所に遊びに行く感覚でご来店いただけます。<br />
                                        是非一度ご来店くださいませ。
                                    </p>
                                </div>
                            </div>
                        </section>
                        {/* images */}
                        <section className="row align-center mt-5">
                            <div className="column col-sm-0" />
                            <div className="column col-3 col-sm-6  d-flex justify-center align-center pa-2">
                                <div
                                    className="img-btn-container"
                                    style={{ height: "62%", width: "62%" }}
                                >
                                    <img
                                        className="img-btn"
                                        src={onomichi}
                                        alt="尾道"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "fill"
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                className="column col-2 col-sm-6  d-flex justify-center align-center pa-2"
                            >
                                <div
                                    className="img-btn-container"
                                    style={{ height: "54%", width: "70%" }}>
                                    <img
                                        className="img-btn"
                                        src={bed1}
                                        alt="ベッド"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "fill"
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                className="column col-3 col-sm-12 d-flex justify-center align-center pa-2"
                            >
                                <div
                                    className="img-btn-container"
                                    style={{ height: "60%", width: "70%" }}>
                                    <img
                                        className="img-btn"
                                        src={cloverPicture}
                                        alt="test"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "fill"
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                className="column col-2 col-sm-6  d-flex justify-center align-center pa-2"
                            >
                                <div
                                    className="img-btn-container"
                                    style={{ height: "100%", width: "100%" }}>
                                    <img
                                        className="img-btn"
                                        src={liangePanel}
                                        alt="リアンジュ看板"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "fill"
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="column col-sm-0" />
                        </section>
                    </section>
                </section>
                {/* Vertical Line */}
                <section className="column col-1">
                    <section className="strech d-flex flex-column justify-center align-start" style={{ borderLeft: "2px solid currentColor" }}>
                        <div className="flex-grow-1" />
                        <h6 className="ma-2" style={{ writingMode: "vertical-rl" }}>Liange onomichi.</h6>
                        <div className="flex-grow-1" />
                        <button >F</button>
                        <button >F</button>
                        <button >F</button>
                    </section>
                </section>
            </section>
        </article>
    );
}

function NewsPanel() {
    return (
        <div className="container box pa-5">
            <div className="row">
                <div className="column" />
                <div className="column col-6 col-sm-12">
                    <h2>NEWS - お知らせ -</h2>
                    <div style={{ borderBottom: "2px solid currentColor" }} />
                    <ul>
                        <li> <p>3/4 あけましておめでとうございます！</p> </li>
                        <div style={{ borderBottom: "1px solid currentColor" }} />
                        <li> <p>3/3 サイトをオープンしました</p> </li>
                        <div style={{ borderBottom: "1px solid currentColor" }} />
                        <li> <p>2/22 サイトをオープンしました</p> </li>
                        <div style={{ borderBottom: "1px solid currentColor" }} />
                        <li> <p>12/22 サイトをオープンしました</p> </li>
                        <div style={{ borderBottom: "1px solid currentColor" }} />
                        <li> <p>12/22 サイトをオープンしました</p> </li>
                        <div style={{ borderBottom: "1px solid currentColor" }} />
                    </ul>
                    <div className="fill-width d-flex">
                        <div className="ml-auto">
                            <a>もっと見る</a>
                        </div>
                    </div>
                </div>
                <div className="column" />
            </div>
        </div>
    );
}

function BlogsPanel() {
    return (
        <div className="blogs-container container mt-12">
            {/* Header */}
            <div className="row">
                <div className="column col-12">
                    <h2>新着ブログ</h2>
                    <div style={{ borderBottom: "2px solid currentColor" }} />
                </div>
            </div>
            {/* Items */}
            <div className="row mt-10">
                <div className="column col-3 col-md-4 col-sm-6 col-xs-12">
                    <BlogCard img="http://thesalon.tokyo/wp/wp-content/uploads/2020/12/valentin-petkov-SJ9LXHONNv4-unsplash.jpg" title="本年も大変お世話になりました"
                        text="boooooooooooいつもお世話になっております。
                THE SALON羽田です。
                みなさま、今年も残すところ残り2日となりました。
                
                「コロナ」というウイルスに振り回されたそんな一年だったと思います。ooooooooooooooody" />
                </div>
            </div>
        </div>
    );
}

interface BlogCardProps {
    img?: string;
    title: string;
    text: string;
}

function BlogCard(props: BlogCardProps) {
    return (
        <div className="card shadow-6">
            <div className="card-image" >
                {props.img ? <img height="120" src={props.img} style={{ objectFit: "cover" }} /> : <div />}
            </div>
            <div className="card-header">
                <h4 className="ma-0">{props.title}</h4>
            </div>
            <div className="card-body">
                <p>{props.text}</p>
            </div>
        </div>
    );
}
