//製作一個問答程式

var question = [
    {
        prompt: "香蕉是甚麼顏色？(a)紅色 (b)綠色 (c)黃色",
        answer: "c"
    },
    {
        prompt: "草莓是甚麼顏色？(a)紅色 (b)紫色 (c)黃色",
        answer: "a"
    },
    {
        prompt: "1公尺等於幾公分？(a)1 (b)10 (c)100",
        answer: "c"
    }
];

var score = 0;
var userAnswers = []; // 用於收集使用者的回答

for (var i = 0; i < question.length; i++) {
    var input = prompt(question[i].prompt);
    userAnswers.push(input); // 將使用者的回答加入到陣列中

    if (input === question[i].answer) {
        score++;
        alert("答對了");
    } else {
        alert("答錯了");
    }
}

alert("總共答對" + score + "題" + "\n您的回答：" + userAnswers.join(", "));
