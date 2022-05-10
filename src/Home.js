import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            kanjiSetClick: "",
        }
        
    }

    clickedKanjiSet = (event) => {
        event.preventDefault();
        this.setState({ kanjiSetClick: event.target.value });
        const waitSecs = 100 // 0.1 seconds
        setTimeout(() => {
            window.location.href=`/kanji?set=${event.target.value}`;
        },waitSecs);
    }

    render() {
        const{ kanjiSetClick } = this.state;
        return(
            <React.Fragment>
                <h1 className="text-center">全ての単語と漢字</h1>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="tango" className="btn from-left">単語</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="kanji-kaku" className="btn from-left">書き漢字</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="kanji-yomerebaii" className="btn from-right">読み漢字</button></Link>
                </div>

                <hr></hr>

                <h2 className="text-center">ユニットで分かれた単語と漢字</h2>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-tango-1" className="btn from-left">U1_1<br></br>単語</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-kaku-1" className="btn from-left">U1_1<br></br>書き漢字</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-yomu-1" className="btn from-right">U1_1<br></br>読み漢字</button></Link>
                </div>
                
                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-tango-2" className="btn from-left">U1_2<br></br>単語</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-kaku-2" className="btn from-left">U1_2<br></br>書き漢字</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-yomu-2" className="btn from-right">U1_2<br></br>読み漢字</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">U2_1<br></br>単語</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u2-kaku-1" className="btn from-left">U2_1<br></br>書き漢字</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u2-yomu-1" className="btn from-right">U2_1<br></br>読み漢字</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u2-tango-2" className="btn from-left">U2_2<br></br>単語</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u2-kaku-2" className="btn from-left">U2_2<br></br>書き漢字</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u2-yomu-2" className="btn from-right">U2_2<br></br>読み漢字</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u2-tango-2_sankou" className="btn from-left">U2_2<br></br>参考にする<br></br>単語</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-tango-1" className="btn from-left">U3_1<br></br>単語</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-kaku-1" className="btn from-left">U3_1<br></br>書き漢字</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-yomu-1" className="btn from-right">U3_1<br></br>読み漢字</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-tango-1_sankou" className="btn from-left">U3_1<br></br>参考にする<br></br>単語</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-tango-2" className="btn from-left">U3_2<br></br>単語</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-kaku-2" className="btn from-left">U3_2<br></br>書き漢字</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-yomu-2" className="btn from-right">U3_2<br></br>読み漢字</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-tango-2_sankou" className="btn from-left">U3_2<br></br>参考にする<br></br>単語</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u4-tango-1" className="btn from-left">U4_1<br></br>単語</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u4-kaku-1" className="btn from-left">U4_1<br></br>書き漢字</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u4-yomu-1" className="btn from-right">U4_1<br></br>読み漢字</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u4-tango-1_sankou" className="btn from-left">U4_1<br></br>参考にする<br></br>単語</button></Link>
                </div>

                

            </React.Fragment>
        )
    }
}

export default Home;