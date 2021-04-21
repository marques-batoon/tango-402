const kanji = {
    kaku: {

        初めて: { 読み方: ['はじめて'] },
        石山: { 読み方: ['いしやま'] },
        遅い: { 読み方: ['おそい'] },
        関係: { 読み方: ['関係'] },

    },

    yomerebaii: {
        // Chapter 1
        紹介:{ 読み方: ['しょうかい'], form: '名詞、スル動詞、ノ形容詞', 意味: "introduction" },
        宿題:{ 読み方: ['しゅくだい'], form: '名詞', 意味: "homework" },
        池田:{ 読み方: ['いけだ'], form: '名字', 意味: "pond + rice field" },
        友達:{ 読み方: ['ともだち'], form: '名詞', 意味: "friend" },
        趣味:{ 読み方: ['しゅみ'], form: '名詞', 意味: "hobby; pastime" },
        隣:{ 読み方: ['となり'], form: 'ノ形容詞、名詞', 意味: "next to; next door" },
        家族:{ 読み方: ['かぞく'], form: '名詞', 意味: "family; members of a family" },
        遊ぶ:{ 読み方: ['あそぶ'], form: '五段動詞、自動詞', 意味: "to play; to hang out" },
        知識:{ 読み方: ['ちしき'], form: '名詞', 意味: "knowledge; information" },
        豊富:{ 読み方: ['ほうふ'], form: 'ナ形容詞、名詞', 意味: "abundant; plentiful" },
        飛行機:{ 読み方: ['ひこうき'], form: '名詞', 意味: "airplane" },
        座る:{ 読み方: ['（～に）すわる'], form: '五段動詞、自動詞', 意味: "to sit（in/on～）" },
        卒業:{ 読み方: ['（～を）そつぎょう'], form: '名詞、スル動詞', 意味: "graduation; moving on (from)" },
        勤める:{ 読み方: ['（～に）つとめる'], form: '一段動詞、他動詞', 意味: "to work （for～）; to be employed （at～）" },
        休暇:{ 読み方: ['きゅうか'], form: '名詞', 意味: "vacation; absence (from work)" },
        京都:{ 読み方: ['きょうと'], form: '都市', 意味: "Kyoto (city, prefecture)\n京都市\n京都府" },
        育つ:{ 読み方: ['（～で）そだつ'], form: '五段動詞、自動詞', 意味: "to grow up（in～）" },
        一晩:{ 読み方: ['ひとばん'], form: '名詞、副詞', 意味: "one night; overnight" },
        両親:{ 読み方: ['りょうしん'], form: '名詞', 意味: "parents; both parents" },
        名刺:{ 読み方: ['めいし'], form: '名詞', 意味: "business card" },
        番号:{ 読み方: ['ばんごう'], form: '名刺', 意味: "number" },
        十数時間:{ 読み方: ['じゅうすうじかん'], form: '', 意味: "ten plus a few hours" },
        空港:{ 読み方: ['くうこう'], form: '名詞', 意味: "airport" },
        迎える:{ 読み方: ['むかえる'], form: '一段動詞、他動詞', 意味: "to welcome; to go out to meet; to greet" },
        呼ぶ:{ 読み方: ['（～を…で）よぶ'], form: '五段動詞、他動詞', 意味: "to call ～ by…" },
        時差ぼけ:{ 読み方: ['時差ボケ'], form: '名詞', 意味: "jet lag" },
        眠る:{ 読み方: ['ねむる'], form: '五段動詞、自動詞', 意味: "to sleep" },
        連れて:{ 読み方: ['つれて行く、つれてくる'], form: '', 意味: "to take someone to, to bring someone along" },
        結局:{ 読み方: ['けっきょく'], form: '副詞', 意味: "finally; in the end" },
        適当:{ 読み方: ['てきとう'], form: 'ナ形容詞', 意味: "appropriate; suitable" },
        引っ越す:{ 読み方: ['ひっこす'], form: '五段動詞、自動詞', 意味: "to move to a new place of residence" },
        若い:{ 読み方: ['わかい'], form: 'イ形容詞', 意味: "young" },
        お互い:{ 読み方: ['おたがい'], form: '名詞、ノ形容詞、副詞', 意味: "each other; one another" },
        娘:{ 読み方: ['むすめ'], form: '名詞', 意味: "daughter" },
        違う:{ 読み方: ['ちがう'], form: '五段動詞、自動詞', 意味: "to differ; to be different" },
        興味:{ 読み方: ['きょうみ'], form: '名詞', 意味: "interest (in something); curiosity (about something)" },
        // Chapter 2
        言葉:{ 読み方: ['ことば'], form: '名詞', 意味: "word(s); expression(s)" },
        会釈:{ 読み方: ['えしゃく'], form: 'スル動詞、名詞', 意味: "to greet by bowing slightly" },
        頭:{ 読み方: ['あたま'], form: '名詞', 意味: "head" },
        鳴る:{ 読み方: ['なる'], form: '五段動詞、自動詞', 意味: "to sound; to ring" },
        寮:{ 読み方: ['りょう'], form: '名詞', 意味: "dormitory" },
        部屋:{ 読み方: ['へや'], form: '名詞', 意味: "room" },
        同室:{ 読み方: ['どうしつ'], form: '名詞', 意味: "same room; sharing a room" },
        寝る:{ 読み方: ['ねる'], form: '一段動詞、自動詞', 意味: "to sleep; to go to bed" },
        終わる:{ 読み方: ['おわる'], form: '五段動詞、自動詞', 意味: "be finished; be over" },
        授業:{ 読み方: ['じゅぎょう'], form: '名詞', 意味: "class" },
        遅れる:{ 読み方: ['おくれる'], form: '一段動詞、自動詞', 意味: "to be late" },
        一郎:{ 読み方: ['いちろう'], form: '男性の名前', 意味: "often given to the oldest son;\none + son" },
        同級生:{ 読み方: ['どうきゅうせい'], form: '名詞', 意味: "classmate" },
        質問:{ 読み方: ['しつもん'], form: '名詞、スル動詞', 意味: "question" },
        病気:{ 読み方: ['びょうき'], form: '名詞、ノ形容詞', 意味: "sickness; illness" },
        非常:{ 読み方: ['ひじょう（に）'], form: '', 意味: "emergency; (very; extremely)" },
        寒い:{ 読み方: ['さむい'], form: 'イ形容詞', 意味: "cold" },
        別れる:{ 読み方: ['（～と）わかれる'], form: '一段動詞、自動詞', 意味: "to part（from～）;\nto say farewell（to～）" },
        顔:{ 読み方: ['かお'], form: '名詞', 意味: "face" },
        一般的:{ 読み方: ['いっぱんてき'], form: 'ナ形容詞', 意味: "general" },
        // Chapter 3
        

    }
}

export default kanji;