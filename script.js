// =========================
// 取得 HTML 元素
// =========================

const languageNoticeScreen = document.getElementById("languageNoticeScreen");
const languageNoticeDoneButton = document.getElementById("languageNoticeDoneButton");

const startScreen = document.getElementById("startScreen");
const prologueScreen = document.getElementById("prologueScreen");

const tutorialScreen = document.getElementById("tutorialScreen");
const tutorialText = document.getElementById("tutorialText");

const endingNoticeScreen = document.getElementById("endingNoticeScreen");
const endingNoticeDoneButton = document.getElementById("endingNoticeDoneButton");


const prevTutorialButton = document.getElementById("prevTutorialButton");
const nextTutorialButton = document.getElementById("nextTutorialButton");
const tutorialPageCounter = document.getElementById("tutorialPageCounter");
const tutorialDoneButton = document.getElementById("tutorialDoneButton");

const prevPrologueButton = document.getElementById("prevPrologueButton");
const nextPrologueButton = document.getElementById("nextPrologueButton");

const speakerName = document.getElementById("speakerName");
const prologueText = document.getElementById("prologueText");
const telegramImage = document.getElementById("telegramImage");
const telegramMagnifier = document.getElementById("telegramMagnifier");
const telegramHint = document.getElementById("telegramHint");
const prologueTextBox = document.querySelector(".prologue-text-box");
const prologueDialogueArea = document.querySelector(".prologue-dialogue-area");
const characterImage = document.getElementById("characterImage");
const prologueFamilyLayer = document.getElementById("prologueFamilyLayer");

const prologueFamilyImages = {
  bigBrother: document.getElementById("prologueBigBrotherImage"),
  secondBrother: document.getElementById("prologueSecondBrotherImage"),
  bigSister: document.getElementById("prologueBigSisterImage"),
  concubine: document.getElementById("prologueConcubineImage")
};

const endingCharacterLayer = document.getElementById("endingCharacterLayer");

const endingCharacterImages = {
  bigBrother: document.getElementById("endingBigBrotherImage"),
  secondBrother: document.getElementById("endingSecondBrotherImage"),
  bigSister: document.getElementById("endingBigSisterImage"),
  concubine: document.getElementById("endingConcubineImage")
};

const searchScreen = document.getElementById("searchScreen");

const investigationStartPanel = document.getElementById("investigationStartPanel");
const investigationStartButton = document.getElementById("investigationStartButton");

const tutorialOpenButton = document.getElementById("tutorialOpenButton");

const relationshipMapButton = document.getElementById("relationshipMapButton");
const relationshipMapOverlay = document.getElementById("relationshipMapOverlay");
const closeRelationshipMapButton = document.getElementById("closeRelationshipMapButton");

const accusationScreen = document.getElementById("accusationScreen");

const suspectSelectArea = document.getElementById("suspectSelectArea");
const evidenceSelectArea = document.getElementById("evidenceSelectArea");

const selectedSuspectText = document.getElementById("selectedSuspectText");
const accusationEvidenceGrid = document.getElementById("accusationEvidenceGrid");

const backToSuspectButton = document.getElementById("backToSuspectButton");
const confirmAccusationButton = document.getElementById("confirmAccusationButton");

const selectedEvidenceCounter = document.getElementById("selectedEvidenceCounter");
const accusationErrorText = document.getElementById("accusationErrorText");

const suspectButtons = document.querySelectorAll(".suspect-button");

const endingDialogueArea = document.getElementById("endingDialogueArea");
const endingLocationLabel = document.getElementById("endingLocationLabel");
const endingDialogueSpeaker = document.getElementById("endingDialogueSpeaker");
const endingDialogueText = document.getElementById("endingDialogueText");
const nextEndingDialogueButton = document.getElementById("nextEndingDialogueButton");

const endingResultArea = document.getElementById("endingResultArea");
const endingResultTitle = document.getElementById("endingResultTitle");
// =========================
// 音效
// =========================

const clickSound = new Audio("click.mp3");
const pageFlipSound = new Audio("page-flip.mp3");

// 筆記更新音效
const notebookUpdateSound = new Audio("audio/notebook-update.mp3");
notebookUpdateSound.volume = 0.65;


// =========================
// 背景音樂 BGM
// =========================

const prologueBgm = new Audio("audio/prologue-bgm.mp3");
const investigationBgm = new Audio("audio/investigation-bgm.mp3");

prologueBgm.loop = true;
investigationBgm.loop = true;

// 音量可調，0.0 ~ 1.0
prologueBgm.volume = 0.35;
investigationBgm.volume = 0.35;

let currentBgm = null;

function playBgm(targetBgm) {
  // 如果已經是同一首，就不要重新播放
  if (currentBgm === targetBgm) {
    return;
  }

  // 停掉目前的背景音樂
  if (currentBgm) {
    currentBgm.pause();
    currentBgm.currentTime = 0;
  }

  currentBgm = targetBgm;

  currentBgm.play().catch(function (error) {
    console.log("BGM 播放被瀏覽器暫時阻擋：", error);
  });
}

function stopBgm() {
  if (!currentBgm) {
    return;
  }

  currentBgm.pause();
  currentBgm.currentTime = 0;
  currentBgm = null;
}

// 播放點擊音效
function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function playPageFlipSound() {
  pageFlipSound.currentTime = 0;
  pageFlipSound.play();
}

function playNotebookUpdateSound() {
  const sound = notebookUpdateSound.cloneNode();

  sound.volume = notebookUpdateSound.volume;

  sound.play().catch(function (error) {
    console.log("筆記更新音效播放失敗：", error);
  });
}

// =========================
// 前導劇情文字
// 你之後可以在這裡改劇情內容
// =========================

const prologueLines = [
  {
    type: "narration",
    text: "1946，日本"
  },
  {
    speaker: "我",
    text: "距離大戰結束已經幾個月了。"
  },
  {
    speaker: "我",
    text: "不知道我什麼時候可以從日本離開。"
  },
  {
    speaker: "我",
    text: "唉，還是先看看大哥發的電報吧！"
  },
  {
    type: "image",
    speaker: "電報",
    image: "images/telegram.png"
  },
  {
    speaker: "我",
    text: "父死，速歸......"
  },
  {
    speaker: "我",
    text: "怎麼會這樣？大哥不是會開這種玩笑的人啊。"
  },
  {
    speaker: "我",
    text: "怎麼偏偏在這種時候......"
  },
  {
    speaker: "我",
    text: "我要趕快辦手續，才能回台灣！"
  },
  {
  type: "backgroundOnly",
  background: "house",
  duration: 750
},
  {
    speaker: "我",
    text: "（我向台灣同鄉會申請了中文姓名，也拿到了中華民國籍證明...）",
    background: "house"
  },
  {
    speaker: "我",
    text: "（經歷了這麼多，終於在半年後回到台灣了！）",
    background: "house"
  },
  {
    speaker: "我",
    text: "（上次看到家門口，已經七年前了。）",
    background: "house"
  },
  {
    speaker: "不明人士",
    text: "喂！喂！",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "我",
    text: "（嗯？他在叫我嗎？）",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "不明人士",
    text: "你是這家的二女兒吧！",
    background: "house",
    characterImage: "images/neighbor-left.png"
  },
  {
    speaker: "我",
    text: "是的，請問您是？",
    background: "house",
    characterImage: "images/neighbor-left.png"
  },
  {
    speaker: "郝國強",
    text: "我是新搬來的郝國強！住在你家旁邊，以後大家互相照顧啊！",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "我",
    text: "（這不是九條先生的房子嗎？這個人怎麼會說是他的？）",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "我",
    text: "（說起來，不知道九條先生是不是被遣返回日本了。）",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "我",
    text: "（雖然很奇怪，但他似乎知道我的存在。）",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "郝國強",
    text: "對了！叫住你可不是為了閒聊。",
    background: "house",
    characterImage: "images/neighbor-left.png"
  },
  {
    speaker: "郝國強",
    text: "大約半年前，你父親過世了，對吧？",
    background: "house",
    characterImage: "images/neighbor-left.png"
  },
  {
    speaker: "我",
    text: "是的。",
    background: "house",
    characterImage: "images/neighbor-left.png"
  },
  {
    speaker: "郝國強",
    text: "他過世當天，我其實有注意到一些怪事...",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "我",
    text: "您想告訴我什麼？",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "郝國強",
    text: "那天傍晚，我看到你家的門開著，一陣子後聽到了爭吵聲。",
    background: "house",
    characterImage: "images/neighbor-left.png"
  },
  {
    speaker: "郝國強",
    text: "原本以為只是普通的吵架，沒想到隔天就得知了他過世的消息。",
    background: "house",
    characterImage: "images/neighbor-left.png"
  },
  {
    speaker: "我",
    text: "為什麼您要跟我說這件事呢？",
    background: "house",
    characterImage: "images/neighbor-left.png"
  },
  {
    speaker: "郝國強",
    text: "我只是想，如果當時不是單純的吵架，那我得說出來。",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "郝國強",
    text: "而且...那個人可以進出你們家的門，那應該是你們熟悉的人吧？",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "郝國強",
    text: "我只能把這個訊息告訴你了，你是唯一不在臺灣的人。",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "我",
    text: "（這太荒謬了，可是如果他說的是真的呢？）",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "我",
    text: "這樣吧，如果您現在有空的話，能否進來喝一杯茶，休息一下呢？",
    background: "house",
    characterImage: "images/neighbor-right.png"
  },
  {
    speaker: "郝國強",
    text: "當然好！走吧。",
    background: "house",
    characterImage: "images/neighbor-left.png"
  },
  {
  type: "backgroundOnly",
  background: "livingroom",
  duration: 750
  },
  {
  type: "narration",
  text: "大哥、大姊、二哥、細姨和小弟都站在客廳。",
  background: "livingroom"
  },
  {
    speaker: "我",
    text: "大哥、姊姊、二哥，細姨、小弟，我回來了。",
    background: "livingroom",
  },
  {
    speaker: "大哥",
    text: "安全回來就好。",
    background: "livingroom",
    characterImage: "images/big-brother.png"
  },
  {
    speaker: "細姨",
    text: "很久沒看到杏子了。",
    background: "livingroom",
    characterImage: "images/concubine-left.png"
  },
  {
    speaker: "細姨",
    text: "距離你去日本讀書已經快六年了吧。",
    background: "livingroom",
    characterImage: "images/concubine-right.png"
  },
  {
    speaker: "我",
    text: "是的。",
    background: "livingroom",
    characterImage: "images/concubine-right.png"
  },
  {
    speaker: "大姐",
    text: "在外面這幾年都是你自己生活，辛苦我們家杏子了。",
    background: "livingroom",
    characterImage: "images/big-sister.png"
  },
  {
    speaker: "大姐",
    text: "在外面有沒有受到甚麼委屈？",
    background: "livingroom",
    characterImage: "images/big-sister.png"
  },
  {
  type: "narration",
  text: "聽到姊姊的關心，你終於忍不住撲到姐姐懷中大哭。",
  background: "livingroom"
  },
  {
  type: "narration",
  text: "彷彿要把這幾年獨自生活、面對戰爭的壓力、接到父親死訊的悲傷都宣洩出來。",
  background: "livingroom"
  },
  {
    speaker: "大哥",
    text: "別哭了，回家就好。",
    background: "livingroom",
    characterImage: "images/big-brother.png"
  },
  {
    speaker: "我",
    text: "好......大哥在信中告訴我，你們已經開始處理喪事了。",
    background: "livingroom",
    characterImage: "images/big-brother.png"
  },
  {
    speaker: "我",
    text: "還有什麼是我現在來得及做的？",
    background: "livingroom",
    characterImage: "images/big-brother.png"
  },
  {
    speaker: "二哥",
    text: "都辦完了，現在只剩遺產分配了。",
    background: "livingroom",
    characterImage: "images/second-brother.png"
  },
  {
    speaker: "二哥",
    text: "好不容易你回來了，就來討論怎麼處理吧。",
    background: "livingroom",
    characterImage: "images/second-brother.png"
  },
  {
    speaker: "我",
    text: "二哥......先等等。",
    background: "livingroom",
    characterImage: "images/second-brother.png"
  },
  {
    speaker: "我",
    text: "在分遺產之前，我想先了解一些事。",
    background: "livingroom",
    characterImage: "images/second-brother.png"
  },
  {
    speaker: "我",
    text: "剛才在外面遇到自稱老強的人，說是我們的新鄰居。",
    background: "livingroom",
    characterImage: "images/second-brother.png"
  },
  {
    speaker: "我",
    text: "因為他有話要跟我說，所以我先請他到應接室等待了。",
    background: "livingroom",
    characterImage: "images/second-brother.png"
  },
  {
    speaker: "我",
    text: "你們認識他嗎？",
    background: "livingroom",
    characterImage: "images/second-brother.png"
  },
  {
    speaker: "細姨",
    text: "你說的是郝先生嗎？",
    background: "livingroom",
    characterImage: "images/concubine-left.png"
  },
  {
    speaker: "細姨",
    text: "他是去年搬過來的，你父親去世前跟他聊得蠻好。",
    background: "livingroom",
    characterImage: "images/concubine-left.png"
  },
  {
    speaker: "我",
    text: "原來是這樣。",
    background: "livingroom",
    characterImage: "images/concubine-right.png"
  },
  {
    speaker: "我",
    text: "如果遺產的事不是一定要在今天處理的話，可以之後再討論嗎？",
    background: "livingroom",
    characterImage: "images/concubine-right.png"
  },
  {
    speaker: "我",
    text: "我想先了解一下父親到底怎麼過世的。",
    background: "livingroom",
    characterImage: "images/concubine-right.png"
  },
  {
    speaker: "二哥",
    text: "今天處理會比較好吧......",
    background: "livingroom",
    characterImage: "images/second-brother.png"
  },
  {
    speaker: "細姨",
    text: "早點處理完，大家也能安心一點。",
    background: "livingroom",
    characterImage: "images/concubine-right.png"
  },
  {
    speaker: "大姐",
    text: "政夫，細姨。",
    background: "livingroom",
    characterImage: "images/big-sister.png"
  },
  {
    speaker: "大姐",
    text: "既然小妹想了解父親當時過世的情況，那麼遺產的事推遲也沒什麼關係。",
    background: "livingroom",
    characterImage: "images/big-sister.png"
  },
  {
    speaker: "大姐",
    text: "杏子具體是想知道什麼？",
    background: "livingroom",
    characterImage: "images/big-sister.png"
  },
  {
    speaker: "我",
    text: "父親過世當天，家裡有發生甚麼事嗎？",
    background: "livingroom",
    characterImage: "images/big-sister.png"
  },
  {
    speaker: "大哥",
    text: "......就和平常差不多，沒什麼不同。",
    background: "livingroom",
    characterImage: "images/big-brother.png"
  },
  {
    speaker: "我",
    text: "我只是覺得有一些事要確認一下。",
    background: "livingroom",
    characterImage: "images/big-brother.png"
  },
  {
    speaker: "細姨",
    text: "你是在懷疑什麼嗎？",
    background: "livingroom",
    characterImage: "images/concubine-right.png"
  },
  {
    speaker: "大哥",
    text: "沒關係……如果杏子有疑問，就讓她問吧。",
    background: "livingroom",
    characterImage: "images/big-brother.png"
  },
  {
    speaker: "我",
    text: "謝謝大哥。",
    background: "livingroom",
    characterImage: "images/big-brother.png"
  },
  {
  type: "investigationStart",
  background: "livingroom"
  }
];


let currentPrologueIndex = 0;
let backgroundPauseTimer = null;

function changePrologueBackground(backgroundName) {
  prologueScreen.classList.remove("sky-bg");
  prologueScreen.classList.remove("house-bg");
  prologueScreen.classList.remove("livingroom-bg");

  if (backgroundName === "sky") {
    prologueScreen.classList.add("sky-bg");
  } else if (backgroundName === "house") {
    prologueScreen.classList.add("house-bg");
  } else if (backgroundName === "livingroom") {
    prologueScreen.classList.add("livingroom-bg");
  }
}

function isPrologueLivingroomScene(currentLine) {
  return (
    currentLine.background === "livingroom" ||
    prologueScreen.classList.contains("livingroom-bg")
  );
}

function getPrologueActiveFamilyKey(speaker) {
  if (!speaker) {
    return null;
  }

  if (speaker.includes("大哥")) {
    return "bigBrother";
  }

  if (speaker.includes("二哥")) {
    return "secondBrother";
  }

  if (speaker.includes("大姊") || speaker.includes("大姐")) {
    return "bigSister";
  }

  if (speaker.includes("細姨")) {
    return "concubine";
  }

  // 玩家、旁白、多人一起說話時，不特別亮任何人
  return null;
}

function setPrologueFamilyGroupVisible(visible, speaker) {
  if (!prologueFamilyLayer) {
    return;
  }

  if (!visible) {
    prologueFamilyLayer.classList.remove("show");

    Object.keys(prologueFamilyImages).forEach(function (key) {
      const image = prologueFamilyImages[key];

      if (!image) {
        return;
      }

      image.classList.remove("active");
      image.classList.remove("dimmed");
    });

    return;
  }

  prologueFamilyLayer.classList.add("show");

  const activeKey = getPrologueActiveFamilyKey(speaker);

  Object.keys(prologueFamilyImages).forEach(function (key) {
    const image = prologueFamilyImages[key];

    if (!image) {
      return;
    }

    image.classList.remove("active");
    image.classList.remove("dimmed");

    // 玩家說話或旁白時，全部正常顯示
    if (!activeKey) {
      return;
    }

    if (key === activeKey) {
      image.classList.add("active");
    } else {
      image.classList.add("dimmed");
    }
  });
}

function updatePrologueText() {
  // 如果前面有正在等待的計時器，先清掉，避免重複觸發
  if (backgroundPauseTimer !== null) {
    clearTimeout(backgroundPauseTimer);
    backgroundPauseTimer = null;
  }

  const currentLine = prologueLines[currentPrologueIndex];

  // 預設隱藏調查開始按鈕
  investigationStartPanel.style.display = "none";

  // 如果這一句有指定背景，就切換背景
  if (currentLine.background) {
    changePrologueBackground(currentLine.background);
  }

  // =========================
  // 特殊段落：只顯示背景，不顯示任何文字框
  // =========================
  if (currentLine.type === "backgroundOnly") {
    prologueDialogueArea.style.display = "none";
    characterImage.style.display = "none";
    setPrologueFamilyGroupVisible(false);
    telegramHint.style.display = "none";
    telegramImage.style.display = "none";

    prologueDialogueArea.classList.remove("image-mode");
    prologueDialogueArea.classList.remove("narration-mode");
    prologueTextBox.classList.remove("image-only");
    prologueTextBox.classList.remove("narration-box");

    backgroundPauseTimer = setTimeout(function () {
      if (currentPrologueIndex < prologueLines.length - 1) {
        currentPrologueIndex++;
        updatePrologueText();
      }
    }, currentLine.duration);

    return;
  }

  // =========================
  // 調查開始按鈕段落
  // =========================
  if (currentLine.type === "investigationStart") {
  // 隱藏對話框
  prologueDialogueArea.style.display = "none";

  // 隱藏單人立繪
  characterImage.style.display = "none";

  // 客廳調查開始前，顯示家人站一排
  setPrologueFamilyGroupVisible(true, null);

    // 隱藏電報相關元素
    telegramHint.style.display = "none";
    telegramImage.style.display = "none";

    // 清除特殊模式
    prologueDialogueArea.classList.remove("image-mode");
    prologueDialogueArea.classList.remove("narration-mode");
    prologueTextBox.classList.remove("image-only");
    prologueTextBox.classList.remove("narration-box");

    // 顯示調查開始按鈕
    investigationStartPanel.style.display = "flex";

    return;
  }

  // 一般情況：顯示對話區
  prologueDialogueArea.style.display = "flex";

  // =========================
  // 圖片段落：只顯示電報圖片
  // =========================
  if (currentLine.type === "image") {
    prologueDialogueArea.classList.add("image-mode");
    prologueDialogueArea.classList.remove("narration-mode");

    prologueTextBox.classList.add("image-only");
    prologueTextBox.classList.remove("narration-box");

    characterImage.style.display = "none";
    setPrologueFamilyGroupVisible(false);
    speakerName.style.display = "none";
    prologueText.style.display = "none";

    telegramHint.style.display = "block";

    telegramImage.src = currentLine.image;
    telegramImage.style.display = "block";

    prevPrologueButton.style.display = "none";
    nextPrologueButton.style.display = "none";

    return;
  }

  // =========================
  // 旁白段落：置中的文字方塊
  // =========================
  if (currentLine.type === "narration") {
    prologueDialogueArea.classList.remove("image-mode");
    prologueDialogueArea.classList.add("narration-mode");

    prologueTextBox.classList.remove("image-only");
    prologueTextBox.classList.add("narration-box");

    characterImage.style.display = "none";
    if (isPrologueLivingroomScene(currentLine)) {
  setPrologueFamilyGroupVisible(true, null);
} else {
  setPrologueFamilyGroupVisible(false);
}
    speakerName.style.display = "none";

    telegramHint.style.display = "none";
    telegramImage.style.display = "none";

    prologueText.style.display = "block";
    prologueText.textContent = currentLine.text;

    // 旁白頁只需要下一頁
    prevPrologueButton.style.display = "none";
    nextPrologueButton.style.display = "flex";

    if (currentPrologueIndex === prologueLines.length - 1) {
      nextPrologueButton.disabled = true;
    } else {
      nextPrologueButton.disabled = false;
    }

    return;
  }

  // =========================
  // 一般角色對話段落
  // =========================
  prologueDialogueArea.classList.remove("image-mode");
  prologueDialogueArea.classList.remove("narration-mode");

  prologueTextBox.classList.remove("image-only");
  prologueTextBox.classList.remove("narration-box");

  telegramHint.style.display = "none";
  telegramImage.style.display = "none";

  speakerName.style.display = "block";
  speakerName.textContent = currentLine.speaker;

  prologueText.style.display = "block";
  prologueText.textContent = currentLine.text;

  // 控制角色立繪
 // 控制角色立繪
// 客廳段落：改用多人站一排
if (isPrologueLivingroomScene(currentLine)) {
  characterImage.style.display = "none";
  setPrologueFamilyGroupVisible(true, currentLine.speaker);
}

// 其他段落：維持原本單人立繪，例如鄰居
else {
  setPrologueFamilyGroupVisible(false);

  if (currentLine.characterImage) {
    characterImage.src = currentLine.characterImage;
    characterImage.style.display = "block";
  } else {
    characterImage.style.display = "none";
  }
}

  prevPrologueButton.style.display = "flex";
  nextPrologueButton.style.display = "flex";

  // 控制左箭頭能不能按
  if (currentPrologueIndex === 0) {
    prevPrologueButton.disabled = true;
  } else {
    prevPrologueButton.disabled = false;
  }

  // 控制右箭頭能不能按
  if (currentPrologueIndex === prologueLines.length - 1) {
    nextPrologueButton.disabled = true;
  } else {
    nextPrologueButton.disabled = false;
  }
}

// =========================
// 切換畫面用的函式
// =========================

function showScreen(screenToShow) {
  startScreen.classList.remove("active");
  languageNoticeScreen.classList.remove("active");
  prologueScreen.classList.remove("active");
  tutorialScreen.classList.remove("active");
  endingNoticeScreen.classList.remove("active");
  accusationScreen.classList.remove("active");
  searchScreen.classList.remove("active");

  screenToShow.classList.add("active");
}

// =========================
// 開始遊戲按鈕
// =========================
// =========================
// 封面頁：點擊任意位置 / 按任意鍵開始遊戲
// =========================

let hasStartedGame = false;

function startGameFromCover() {
  // 避免重複觸發
  if (hasStartedGame) {
    return;
  }

  // 只有在開始封面畫面時才可以開始
  if (!startScreen.classList.contains("active")) {
    return;
  }

  hasStartedGame = true;

  playClickSound();

  // 播放前導劇情背景音樂
  playBgm(prologueBgm);

  // 先進入黑屏說明畫面
  showScreen(languageNoticeScreen);
}

// 滑鼠點擊封面任意位置開始
startScreen.addEventListener("click", function () {
  startGameFromCover();
});

// 鍵盤按任意鍵開始
document.addEventListener("keydown", function () {
  startGameFromCover();
});

languageNoticeDoneButton.addEventListener("click", function () {
  playClickSound();

  currentPrologueIndex = 0;
  updatePrologueText();

  showScreen(prologueScreen);
});

// =========================
// 前導劇情下一句按鈕
// =========================

// 回到上一句按鈕
prevPrologueButton.addEventListener("click", function () {
  playClickSound();

  if (currentPrologueIndex > 0) {
    currentPrologueIndex--;
    updatePrologueText();
  }
});

// 下一句按鈕
nextPrologueButton.addEventListener("click", function () {
  playClickSound();

  if (currentPrologueIndex < prologueLines.length - 1) {
    currentPrologueIndex++;
    updatePrologueText();
  }
});

// =========================
// 電報放大鏡效果
// =========================

const magnifierZoom = 2.2;

function moveTelegramMagnifierTo(x, y) {
  telegramMagnifier.style.setProperty(
    "transform",
    `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
    "important"
  );
}

function hideTelegramMagnifier() {
  telegramMagnifier.style.display = "none";

  telegramMagnifier.style.setProperty(
    "transform",
    "translate3d(-9999px, -9999px, 0) translate(-50%, -50%)",
    "important"
  );
}

telegramImage.addEventListener("mouseenter", function () {
  telegramMagnifier.style.display = "block";
  telegramMagnifier.style.backgroundImage = `url("${telegramImage.src}")`;
});

telegramImage.addEventListener("mouseleave", function () {
  hideTelegramMagnifier();
});

telegramImage.addEventListener("mousemove", function (event) {
  const imageRect = telegramImage.getBoundingClientRect();

  const mouseX = event.clientX - imageRect.left;
  const mouseY = event.clientY - imageRect.top;

  const lensWidth = telegramMagnifier.offsetWidth;
  const lensHeight = telegramMagnifier.offsetHeight;

  // 放大鏡圓心直接對準滑鼠位置
  moveTelegramMagnifierTo(event.clientX, event.clientY);

  // 放大圖片背景尺寸
  telegramMagnifier.style.backgroundSize =
    imageRect.width * magnifierZoom + "px " +
    imageRect.height * magnifierZoom + "px";

  // 放大鏡中心顯示滑鼠目前指到的位置
  telegramMagnifier.style.backgroundPosition =
    "-" + (mouseX * magnifierZoom - lensWidth / 2) + "px " +
    "-" + (mouseY * magnifierZoom - lensHeight / 2) + "px";
});

// 點擊電報圖片後，進入下一句
telegramImage.addEventListener("click", function () {
  playClickSound();

  hideTelegramMagnifier();

  if (currentPrologueIndex < prologueLines.length - 1) {
    currentPrologueIndex++;
    updatePrologueText();
  }
});

// =========================
// 教學內容頁面
// =========================

const tutorialPages = [
  `心有懷疑的你，決定至不同房間展開調查。
◎ 人物：將鼠標移至人物並「點擊」，即可進行對話。
◎ 物件：將鼠標移至閃爍光點並「點擊」，即可展開調查。`,

  `調查後，可取得「關鍵證據」、「次要證據」或「筆記」。
  皆會收錄至「調查筆記」中，未讀時會出現紅點提示。
  ★ 人物關係圖：點擊查看，可了解你在家中的位置。`
];

let currentTutorialPageIndex = 0;
let tutorialOpenSource = "beforeMap";

function renderTutorialPage() {
  tutorialText.textContent = tutorialPages[currentTutorialPageIndex];

  tutorialPageCounter.textContent =
    `${currentTutorialPageIndex + 1} / ${tutorialPages.length}`;

  // 第一頁不能按上一頁
  prevTutorialButton.disabled = currentTutorialPageIndex === 0;

  // 最後一頁不能按下一頁
  nextTutorialButton.disabled =
    currentTutorialPageIndex === tutorialPages.length - 1;

  // 只有最後一頁才顯示「閱讀完畢」
  if (currentTutorialPageIndex === tutorialPages.length - 1) {
    tutorialDoneButton.style.display = "block";
  } else {
    tutorialDoneButton.style.display = "none";
  }
}

// 點擊「調查開始」後，進入搜索階段
investigationStartButton.addEventListener("click", function () {
  playClickSound();

  // 從前導音樂切換成調查階段音樂
  playBgm(investigationBgm);

  investigationStartPanel.style.display = "none";

  tutorialOpenSource = "beforeMap";

  currentTutorialPageIndex = 0;
  renderTutorialPage();

  showScreen(tutorialScreen);
});

tutorialOpenButton.addEventListener("click", function () {
  playClickSound();

  tutorialOpenSource = "sideButton";

  currentTutorialPageIndex = 0;
  renderTutorialPage();

  showScreen(tutorialScreen);
});

prevTutorialButton.addEventListener("click", function () {
  playClickSound();

  if (currentTutorialPageIndex > 0) {
    currentTutorialPageIndex--;
    renderTutorialPage();
  }
});

nextTutorialButton.addEventListener("click", function () {
  playClickSound();

  if (currentTutorialPageIndex < tutorialPages.length - 1) {
    currentTutorialPageIndex++;
    renderTutorialPage();
  }
});

tutorialDoneButton.addEventListener("click", function () {
  playClickSound();

  showScreen(searchScreen);

  // 如果是前導劇情後第一次看教學，讀完後進地圖
  if (tutorialOpenSource === "beforeMap") {
    showMapView();
  }

  // 如果是右側教學按鈕打開，就只回到原本搜尋畫面
  // 不呼叫 showMapView()，避免玩家在房間裡看教學後被強制送回地圖
});

// =========================
// 搜索階段：地圖房間點擊功能
// =========================

// =========================
// 搜索階段：地圖房間點擊功能
// =========================

const roomButtons = document.querySelectorAll(".map-room");
const mapStage = document.querySelector(".map-stage");

const roomInfoPanel = document.getElementById("roomInfoPanel");
const roomInfoTitle = document.getElementById("roomInfoTitle");
const roomInfoText = document.getElementById("roomInfoText");
const closeRoomInfoButton = document.getElementById("closeRoomInfoButton");

const evidencePanel = document.getElementById("evidencePanel");
const evidenceCard = document.getElementById("evidenceCard");
const evidenceType = document.getElementById("evidenceType");
const evidenceTitle = document.getElementById("evidenceTitle");
const evidenceHint = document.getElementById("evidenceHint");
const evidenceImage = document.getElementById("evidenceImage");
const evidenceReadingPanel = document.getElementById("evidenceReadingPanel");
const evidenceDescription = document.getElementById("evidenceDescription");
const evidenceDiaryBlock = document.getElementById("evidenceDiaryBlock");
const evidenceDiaryTitle = document.getElementById("evidenceDiaryTitle");
const evidenceDiaryText = document.getElementById("evidenceDiaryText");
const evidenceDiaryControls = document.getElementById("evidenceDiaryControls");
const prevEvidenceDiaryButton = document.getElementById("prevEvidenceDiaryButton");
const nextEvidenceDiaryButton = document.getElementById("nextEvidenceDiaryButton");
const evidenceDiaryCounter = document.getElementById("evidenceDiaryCounter");
const evidenceCloseHint = document.getElementById("evidenceCloseHint");
const closeEvidenceButton = document.getElementById("closeEvidenceButton");

const roomTitlePanel = document.getElementById("roomTitlePanel");
const roomTitleText = document.getElementById("roomTitleText");
const roomHotspotCountText = document.getElementById("roomHotspotCountText");
const backToMapButton = document.getElementById("backToMapButton");

const roomCharacterImage = document.getElementById("roomCharacterImage");
const startRoomDialogueButton = document.getElementById("startRoomDialogueButton");
const roomCharacterHitbox = document.getElementById("roomCharacterHitbox");

const roomDialogueBox = document.getElementById("roomDialogueBox");

const roomHotspotLayer = document.getElementById("roomHotspotLayer");
const roomHotspots = document.querySelectorAll(".room-hotspot");

// =========================
// 讓每個熱區光點有不同的閃爍節奏
// =========================

function applyRandomHotspotTwinkle() {
  roomHotspots.forEach(function (hotspot) {
    // 每個光點大約 4.4～6.4 秒閃一次
    const duration = 4.4 + Math.random() * 2;

    // 每個光點起始時間不同，避免一起亮
    const delay = Math.random() * 5;

    hotspot.style.setProperty("--twinkle-duration", duration + "s");
    hotspot.style.setProperty("--twinkle-delay", delay + "s");
  });
}

applyRandomHotspotTwinkle();

const roomDialogueSpeaker = document.getElementById("roomDialogueSpeaker");
const roomDialogueText = document.getElementById("roomDialogueText");
const roomChoiceBox = document.getElementById("roomChoiceBox");
const nextRoomDialogueButton = document.getElementById("nextRoomDialogueButton");
const closeRoomDialogueButton = document.getElementById("closeRoomDialogueButton");

const notebookUpdateToast = document.getElementById("notebookUpdateToast");

let currentRoom = null;
let currentRoomDialogueIndex = 0;
let isRoomDialogueOpen = false;
let isRoomInfoOpen = false;

let currentDialogueLines = [];
let currentDialogueSectionIndex = null;
let completedDialogueSectionIndexes = [];

// =========================
// 新對話系統：已讀 / 解鎖狀態
// =========================

let viewedDialogueIds = [];

function isNotebookItemCollected(itemId) {
  return clues.some(function (item) {
    return item.id === itemId && item.collected;
  });
}

function isDialogueViewed(dialogueId) {
  return viewedDialogueIds.includes(dialogueId);
}

function markDialogueViewed(dialogueId) {
  if (!viewedDialogueIds.includes(dialogueId)) {
    viewedDialogueIds.push(dialogueId);
  }
}

function getDialogueSectionId(section, index) {
  if (section.id) {
    return section.id;
  }

  return currentRoom.title + "-dialogue-" + index;
}

function isDialogueSectionUnlocked(section) {
  // 基礎對話永遠解鎖
  if (section.type === "basic") {
    return true;
  }

  // 如果需要某個證據
  if (section.requiredClueId) {
    return isNotebookItemCollected(section.requiredClueId);
  }

  // 如果需要某個筆記
  if (section.requiredNoteId) {
    return isNotebookItemCollected(section.requiredNoteId);
  }

  // 如果需要先看過某段對話
  if (section.requiredDialogueId) {
    return isDialogueViewed(section.requiredDialogueId);
  }

  // 保留舊版 requiredCompletedIndex，相容目前應接室用法
  if (section.requiredCompletedIndex !== undefined) {
    return completedDialogueSectionIndexes.includes(section.requiredCompletedIndex);
  }

  // 沒有條件就視為解鎖
  return true;
}

function getDialogueChoiceLabel(section, index) {
  const dialogueId = getDialogueSectionId(section, index);
  const unlocked = isDialogueSectionUnlocked(section);
  const viewed = isDialogueViewed(dialogueId);

  // 選單上顯示「對話意義」，如果沒有 menuText，就沿用原本 choiceText
  const displayText = section.menuText || section.choiceText;

  if (!unlocked) {
    return "🔒 ？？？？？";
  }

  // 已讀
  if (viewed) {
    if (section.type === "trigger") {
      return "✅ " + (section.icon || "💡") + " " + displayText;
    }

    return "✅ " + displayText;
  }

  // 已解鎖但未讀的觸發對話
  if (section.type === "trigger") {
    return (section.icon || "💡") + " " + displayText + "　NEW";
  }

  // 基礎對話
  return "📄 " + displayText;
}

// 房間資料
const roomData = {
  bigBrother: {
  title: "大哥房",
  available: true,
  background: "images/rooms/big-brother-room.png",
  characterImage: "images/big-brother.png",

  characterClass: "big-brother-room-character",
  characterHitboxClass: "hitbox-big-brother-room",

  dialogueTargetName: "大哥",
  choiceIntroText: "想問大哥哪件事？",

  hotspots: [
    "diary",
    "heartCertificate",
    "bigBrotherFuton",
    "bigBrotherWindow"
  ],

  dialogueSections: [
    {
      id: "bigBrother-basic-1",
      type: "basic",
      choiceText: "大哥，父親究竟是怎麼過世的？",
      menuText: "父親過世的原因",
      noteIds: ["note15", "note16"],

      lines: [
        {
          speaker: "我",
          text: "大哥，父親究竟是怎麼過世的？"
        },
        {
          speaker: "大哥",
          text: "我認為只是意外......我那天早上就出門了，父親認為現在是去考公務員的好時機，一直催促我去考公務員。"
        },
        {
          speaker: "大哥",
          text: "但我真的不太喜歡那群人......算了，這不是重點。"
        },
        {
          speaker: "大哥",
          text: "我那天就是出門去問公務員的相關資料。"
        },
        {
          speaker: "大哥",
          text: "等我傍晚回到家時，父親已經躺在他房間的櫃子旁邊。"
        },
        {
          speaker: "大哥",
          text: "我到的時候，他頭上的血已經乾了。"
        },
        {
          speaker: "大哥",
          text: "我猜他是自己跌倒，撞到櫃子的角......"
        }
      ]
    },

    {
      id: "bigBrother-basic-2",
      type: "basic",
      choiceText: "在父親過世當天，大哥有看到什麼特別的事嗎？",
      menuText: "父親去世那天的情況",
      noteIds: ["note17", "note18"],

      lines: [
        {
          speaker: "我",
          text: "在父親過世當天，大哥有看到什麼特別的事嗎？"
        },
        {
          speaker: "大哥",
          text: "當時大家都不在，細姨小弟是在我之後才回來的，說是帶小弟去拍照了。"
        },
        {
          speaker: "大哥",
          text: "那天拍的照現在已經擺在客廳了。"
        },
        {
          speaker: "大哥",
          text: "如果真的要說現場有什麼特別的話......父親的房間當時有點亂，有一些文件有被翻出來。"
        },
        {
          speaker: "大哥",
          text: "客廳桌上那份契約平常是收在父親房裡的，當時就被特別拿出來，可能父親當時在整理房間吧。"
        }
      ]
    },

    {
      id: "bigBrother-trigger-father-letter",
      type: "trigger",
      icon: "✉️",
      choiceText: "出示：父親與陌生女性的親密書信",
      menuText: "關於親密書信以及細姨",

      // 玩家調查到父親房的親密書信，取得 secondary5 後才解鎖
      requiredClueId: "secondary5",

      noteIds: ["note19"],

      lines: [
        {
          speaker: "我",
          text: "大哥，你知道父親有跟細姨以外的人通信嗎？"
        },
        {
          speaker: "大哥",
          text: "嗯。細姨之前也在和父親吵這件事。"
        },
        {
          speaker: "大哥",
          text: "細姨是和母親一起嫁入我們家的。你知道父親和細姨之間是有很深的感情。"
        },
        {
          speaker: "我",
          text: "是呀？"
        },
        {
          speaker: "大哥",
          text: "但在父親過世前，細姨發現父親和外面的女生在寫信......好像還有約出去，買給那個人保養品。"
        },
        {
          speaker: "大哥",
          text: "細姨很傷心，和父親大吵了一架。"
        },
        {
          speaker: "大哥",
          text: "所以那天細姨才和小弟自己去拍照片，不找父親。"
        }
      ]
    },

    {
      id: "bigBrother-trigger-key",
      type: "trigger",
      icon: "🔑",
      choiceText: "出示：關於大門鑰匙的疑問",
      menuText: "關於鑰匙",

      // 應接室鄰居基礎對話完成後會取得 note01
      requiredNoteId: "note01",

      noteIds: ["note20"],

      lines: [
        {
          speaker: "我",
          text: "大哥，家裡的人都有大門的鑰匙嗎？"
        },
        {
          speaker: "大哥",
          text: "對，我們身上都各有一把鑰匙。現在治安沒有很好，大門通常都鎖起來。"
        },
        {
          speaker: "我",
          text: "那......最近有誰的鑰匙不見嗎？"
        },
        {
          speaker: "大哥",
          text: "沒有吧。"
        }
      ]
    }
  ]
},

  father: {
  title: "爸爸房",
  available: true,
  background: "images/rooms/father-room.jpg",
  characterImage: "images/second-brother.png",

  dialogueTargetName: "二哥",
  choiceIntroText: "想問二哥哪件事？",

  hotspots: [
    "fatherPaperweight",
    "fatherBedsideCorner",
    "fatherBedsideCabinet",
    "fatherLetter",
    "fatherOshiire"
  ],

  dialogueSections: [
    {
      id: "father-basic-1",
      type: "basic",
      choiceText: "在父親過世當天，二哥在哪裡？家裡發生什麼了？",
      menuText: "父親去世那天的情況",

      // 文件中這段基礎對話沒有直接新增筆記
      noteIds: ["note28"],

      lines: [
        {
          speaker: "我",
          text: "在父親過世當天，二哥在哪裡？家裡發生什麼了？"
        },
        {
          speaker: "二哥",
          text: "我甚麼都不知道。那天我出去和朋友喝酒了，比較晚回家。"
        },
        {
          speaker: "二哥",
          text: "到家的時候還昏昏沉沉，我是隔天早上才意識到父親去世了。"
        }
      ]
    },

    {
      id: "father-basic-2",
      type: "basic",
      choiceText: "在我不在家的這段時間裡，大家都還好嗎？",
      menuText: "家人的健康狀況",

      // 文件中這段基礎對話沒有直接新增筆記
      noteIds: ["note29"],

      lines: [
        {
          speaker: "我",
          text: "在我不在家的這段時間裡，大家都還好嗎？"
        },
        {
          speaker: "二哥",
          text: "…都還可以吧，只是大姊最近身體好像越來越不好了。"
        },
        {
          speaker: "二哥",
          text: "常常看到她咳嗽，姊夫的身體狀況好像跟她一樣差。有可能就是姊夫傳病給她的。"
        }
      ]
    },

    {
      id: "father-trigger-neighbor-argument",
      type: "trigger",
      icon: "🗣️",
      choiceText: "父親去世前，很常和大哥吵架嗎？",
      menuText: "關於大哥和父親吵架的事情",

      // 應接室鄰居「為什麼會懷疑大哥？」完成後會取得 note03
      requiredNoteId: "note03",

      noteIds: ["note10", "note11"],

      lines: [
        {
          speaker: "我",
          text: "父親去世前，很常和大哥吵架嗎？"
        },
        {
          speaker: "二哥",
          text: "嗯？喔喔......是啊！那陣子吵到大家都很煩躁，聲音常常大到隔壁都聽得到。"
        },
        {
          speaker: "二哥",
          text: "你說大哥也真是的。他從戰場上回來後，雙手肌肉就不太能出力了嘛，力氣現在基本上和細姨差不多，都拿不起重物。"
        },
        {
          speaker: "二哥",
          text: "他就天天待在家，也不出門找工作。"
        },
        {
          speaker: "二哥",
          text: "父親也是為了大哥好，才讓他去應徵公務員工作。"
        },
        {
          speaker: "二哥",
          text: "他竟然直接拒絕父親的提案，還說什麼看不起霸佔別人東西的人。"
        },
        {
          speaker: "我",
          text: "甚麼意思？看不起誰？"
        },
        {
          speaker: "二哥",
          text: "大哥是說，像是隔壁的郝國強佔用了九條先生的屋子那樣，他不想和占用其他人財產的人一起工作。"
        },
        {
          speaker: "二哥",
          text: "反正大哥就不想去政府部門工作，天天和父親吵架。"
        },
        {
          speaker: "二哥",
          text: "說不定......父親就是跟大哥吵架，才心臟病發，跌倒的。"
        }
      ]
    }
  ]
},

  girls: {
  title: "女生房",
  available: true,
  background: "images/rooms/girls-room.png",
  characterImage: "images/big-sister.png",

  dialogueTargetName: "大姊",
  choiceIntroText: "想問大姊哪件事？",

  hotspots: [
    "girlsHandkerchief",
    "girlsLotusPainting",
    "girlsDresser"
  ],

  dialogueSections: [
    {
      id: "girls-basic-1",
      type: "basic",
      choiceText: "大姊，父親過世那天，有發生什麼事嗎？",
      menuText: "父親去世那天的情況",

      noteIds: ["note23", "note24"],

      lines: [
        {
          speaker: "我",
          text: "大姊，父親過世那天，有發生什麼事嗎？"
        },
        {
          speaker: "大姊",
          text: "和平常沒什麼不同......我那天和往常一樣，白天來看父親，傍晚前回去找我丈夫。"
        },
        {
          speaker: "大姊",
          text: "早上時細姨也在，下午他就帶著小弟出門去照相館了。"
        },
        {
          speaker: "大姊",
          text: "至於大哥，他一早就出去，說是要去處理跟工作有關的事。"
        },
        {
          speaker: "大姊",
          text: "二弟的話，稍微晚二哥一段時間出門，我就沒等他回來。說是去找朋友玩，但行為又神神秘秘的，也不知道要幹嘛。"
        },
        {
          speaker: "大姊",
          text: "但他本來個性就這樣，想一齣是一齣。前一陣子還吵著創業。"
        },
        {
          speaker: "我",
          text: "創業？"
        },
        {
          speaker: "大姊",
          text: "是呀。去年說要創業，跑去跟潮流，向甚麼地下錢莊借錢。"
        },
        {
          speaker: "大姊",
          text: "前一陣子台幣不是瘋狂貶值嗎，那錢的數字越滾越大，他就還不上跟人家借的錢了。"
        },
        {
          speaker: "大姊",
          text: "當時跟父親要錢，父親沒給他，所以他剛才急著分遺產，也是因為這件事。"
        },
        {
          speaker: "大姊",
          text: "至於我......在晚餐前，我就先回我丈夫那邊了。父親的死我是隔天才知道的。"
        }
      ]
    },

    {
      id: "girls-trigger-contract",
      type: "trigger",
      icon: "📜",
      choiceText: "出示：契約",
      menuText: "關於契約",

      // 玩家調查客廳契約，取得 secondary2 後才解鎖
      requiredClueId: "secondary2",

      noteIds: ["note25"],

      lines: [
        {
          speaker: "我",
          text: "大姊，你知道桌上那份契約內容是什麼嗎？"
        },
        {
          speaker: "大姊",
          text: "知道，這也是這次分配遺產中很重要的一個部分。"
        },
        {
          speaker: "大姊",
          text: "這份契約是父親和九條先生合作的成果。"
        },
        {
          speaker: "我",
          text: "父親和九條先生合作？我們之前雖然是鄰居，但並沒有生意上的交流呀？"
        },
        {
          speaker: "大姊",
          text: "說起來有點複雜。去年戰爭結束了，日本人跟著政府回去，這你知道吧？"
        },
        {
          speaker: "我",
          text: "知道的，所以九條先生也回去了嗎？但這跟契約有甚麼關係？"
        },
        {
          speaker: "大姊",
          text: "九條先生在台灣還有一些土地，帶不回去呀！如果放著不管就會被新來的政府收走了，多可惜。"
        },
        {
          speaker: "大姊",
          text: "所以九條先生就和父親商議，把那些土地用很低的價格賣給父親。"
        },
        {
          speaker: "大姊",
          text: "父親就給九條先生現金和一些保值的貴金屬，當作交換。"
        },
        {
          speaker: "大姊",
          text: "當時有好多環節需要確認呢，我們還特別把契約簽訂日期填在去年8/15之前，讓以前認識的人幫我們做公證人。"
        },
        {
          speaker: "大姊",
          text: "雖然後來政府說，只要在10月25前的契約都有效，但當時不知道嘛。為了弄那個契約，花了一番功夫。"
        },
        {
          speaker: "大姊",
          text: "我跟大哥，還有細姨，當時都在幫忙處理這些事情。"
        },
        {
          speaker: "大姊",
          text: "只有二弟，忙著創業，不管家裡，所以他大概也不清楚家裡的情況吧。"
        }
      ]
    },

    {
      id: "girls-trigger-handkerchief",
      type: "trigger",
      icon: "🩸",
      choiceText: "出示：沾血手帕",
      menuText: "關於手帕上的血跡",

      // 玩家調查女生房手帕，取得 required4 後才解鎖
      requiredClueId: "required4",

      noteIds: ["note26"],

      lines: [
        {
          speaker: "我",
          text: "大姊，這手帕是你的對吧？為甚麼上面會有血跡呢？"
        },
        {
          speaker: "大姊",
          text: "啊！你不要碰那條手帕！"
        },
        {
          speaker: "我",
          text: "為什麼？"
        },
        {
          speaker: "大姊",
          text: "那條手帕上面的血是我咳嗽的時候咳出來的血，有可能會傳染給你，你趕快丟掉！"
        },
        {
          speaker: "大姊",
          text: "唉，我不是把手帕收起來了嗎，你怎麼把它翻出來的。"
        },
        {
          speaker: "大姊",
          text: "現在好多人都跟我生一樣的病，為了不傳染給你們，我已經有一陣子沒回家了。"
        },
        {
          speaker: "大姊",
          text: "今天是想說要迎接你回來，才過來的。"
        },
        {
          speaker: "我",
          text: "大姊生病了，甚麼病？甚麼時候的事，身體還好嗎？！"
        },
        {
          speaker: "大姊",
          text: "大概就是這陣子的事......我猜是我丈夫傳染給我的。"
        },
        {
          speaker: "大姊",
          text: "沒錯的話，應該是肺癆。最近咳嗽的時候都會有血。"
        },
        {
          speaker: "大姊",
          text: "外面好多人都跟我生一樣的病，你沒事就別出門吧。"
        }
      ]
    }
  ]
},

  zashiki: {
  title: "座敷",
  available: true,
  background: "images/rooms/zashiki-room.png",
  characterImage: "images/concubine-right.png",

  dialogueTargetName: "細姨",
  choiceIntroText: "想和細姨談哪件事？",

  hotspots: [
    "sleepingPills",
    "concubinePhoto",
    "landContract",
    "fatherMemorialPhoto"
  ],

  dialogueSections: [
    {
      id: "zashiki-basic-1",
      type: "basic",
      choiceText: "父親去世那天，有發生什麼特別的事嗎？",
      menuText: "父親去世那天的情況",
      noteIds: ["note04"],

      lines: [
        {
          speaker: "我",
          text: "父親去世那天，有發生什麼特別的事嗎？"
        },
        {
          speaker: "細姨",
          text: "特別的事嗎......好像沒有。"
        },
        {
          speaker: "細姨",
          text: "但你二哥那天很晚才回到家，好像還喝醉的樣子。"
        },
        {
          speaker: "細姨",
          text: "他平常不太會這麼晚回家。"
        }
      ]
    },

    {
      id: "zashiki-basic-2",
      type: "basic",
      choiceText: "父親是怎麼過世的？",
      menuText: "父親過世的原因",
      noteIds: ["note05"],

      lines: [
        {
          speaker: "我",
          text: "父親是怎麼過世的？"
        },
        {
          speaker: "細姨",
          text: "你大哥說，龍男可能是自己跌到，撞上櫃子的。"
        },
        {
          speaker: "細姨",
          text: "我回到家的時候只有政雄在家，他就坐在龍男旁邊......"
        }
      ]
    },

    {
      id: "zashiki-trigger-sleeping-pills",
      type: "trigger",
      icon: "💊",
      choiceText: "出示：藥箱裡的安眠藥",
      menuText: "關於安眠藥",

      // 玩家調查到安眠藥，取得 required1 後才解鎖
      requiredClueId: "required1",

      noteIds: ["note06"],

      lines: [
        {
          speaker: "我",
          text: "細姨，這是你的安眠藥嗎？"
        },
        {
          speaker: "細姨",
          text: "對呀，你不知道，龍男有一陣子都睡不好，所以家裡有備著安眠藥。"
        },
        {
          speaker: "我",
          text: "父親每天都要靠安眠藥入睡嗎？"
        },
        {
          speaker: "細姨",
          text: "雖然不是每一天，但也差不多了。我大概都睡前提醒他吃。"
        },
        {
          speaker: "細姨",
          text: "以前有一次，龍男提早自己吃安眠藥，精神恍惚，差點在家裡摔倒呢。"
        },
        {
          speaker: "細姨",
          text: "後來都收在我這裡，等睡前我再拿給他。"
        }
      ]
    }
  ]
},

  bath: {
  title: "風呂",
  available: true,
  background: "images/rooms/bath-room.png",

  characterImage: "",

  hotspots: [
    "bathBucket",
    "bathTub"
  ]
},

  toilet: {
    title: "便所",
    available: false
  },

  reception: {
  title: "應接室",
  available: true,
  background: "images/rooms/reception-room.png",
  characterImage: "images/neighbor-right.png",

  characterClass: "reception-neighbor-character",
  characterHitboxClass: "hitbox-reception-neighbor",

  dialogueTargetName: "郝國強",
  choiceIntroText: "想問郝先生哪件事？",

  hotspots: [
    "receptionIrisFlower",
    "receptionWesternFurniture"
  ],

  dialogueSections: [
    {
      id: "reception-basic-1",
      type: "basic",
      choiceText: "當天晚上，您還看到了什麼？",
      menuText: "郝國強在門外還沒說完的話",
      noteIds: ["note01"],

      lines: [
        {
          speaker: "我",
          text: "當天晚上，您還看到了什麼？"
        },
        {
          speaker: "鄰居",
          text: "我當時在澆花......大概是傍晚的時候，我看到有人拿鑰匙開了你家的門。"
        },
        {
          speaker: "鄰居",
          text: "但天色已經暗下來了，我沒有看清楚是誰。"
        },
        {
          speaker: "我",
          text: "鑰匙？"
        },
        {
          speaker: "鄰居",
          text: "沒錯，所以我才會懷疑是你家的人，尤其是你大哥。"
        },
        {
          speaker: "鄰居",
          text: "我還沒說完，在那個人進去後，我聽到金龍兄和人的吵架聲。"
        }
      ]
    },

    {
      id: "reception-trigger-argument-content",
      type: "trigger",
      icon: "🗣️",
      choiceText: "他們在吵什麼？",
      menuText: "關於吵架內容",

      // 必須先看完「當天晚上，您還看到了什麼？」
      requiredDialogueId: "reception-basic-1",

      noteIds: ["note02"],

      lines: [
        {
          speaker: "我",
          text: "他們在吵什麼？"
        },
        {
          speaker: "鄰居",
          text: "他們當時是用日語吵架的，我沒有聽懂。"
        },
        {
          speaker: "鄰居",
          text: "吵架聲停止後，我看到一個人影衝了出去。再之後我就沒關注了。"
        },
        {
          speaker: "我",
          text: "了解了。謝謝你，郝先生。"
        }
      ]
    },

    {
      id: "reception-trigger-suspect-brother",
      type: "trigger",
      icon: "🔑",
      choiceText: "為什麼會懷疑大哥？",
      menuText: "關於懷疑大哥的原因",

      // 必須先看完「當天晚上，您還看到了什麼？」
      requiredDialogueId: "reception-basic-1",

      noteIds: ["note03"],

      lines: [
        {
          speaker: "我",
          text: "為什麼會懷疑大哥？"
        },
        {
          speaker: "鄰居",
          text: "金龍兄前一陣子和你大哥常常吵架......好像是跟找工作有關。"
        },
        {
          speaker: "我",
          text: "了解了。謝謝你，郝先生。"
        }
      ]
    }
  ]
},

  secondBrother: {
    title: "二哥房",
    available: false
  },

  tea: {
    title: "茶間",
    available: false
  },

  kitchen: {
  title: "台所",
  available: true,
  background: "images/rooms/kitchen-room.png",

  characterImage: "",

  hotspots: [
    "kitchenIcebox",
    "kitchenCupboard"
  ]
}
};

// 進入房間
function enterRoom(room) {
  currentRoom = room;
  currentRoomDialogueIndex = 0;

  isRoomDialogueOpen = false;
  isRoomInfoOpen = false;

  isEvidenceThoughtOpen = false;
  currentEvidence = null;
  isEvidenceDetailShown = false;
  pendingEvidenceThought = "";
  pendingEvidenceClueId = null;

  currentDialogueLines = [];
  currentDialogueSectionIndex = null;
  completedDialogueSectionIndexes = [];

  // 隱藏地圖
  mapStage.style.display = "none";

  // 隱藏房間提示框
  roomInfoPanel.style.display = "none";

  // 顯示房間標題與回地圖按鈕
  roomTitlePanel.style.display = "block";
  backToMapButton.style.display = "block";

  // 顯示房名
  roomTitleText.textContent = room.title;
  // 顯示本房間可調查物件數量
const hotspotCount = room.hotspots ? room.hotspots.length : 0;

  roomHotspotCountText.innerHTML =
  `本房間共有 <span class="hotspot-count-number">${hotspotCount}</span> 個「物件」可點擊調查`;

  // 切換房間背景
  searchScreen.style.backgroundImage =
    `linear-gradient(rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.28)), url("${room.background}")`;

  searchScreen.style.backgroundColor = "#111111";

  // =========================
// 顯示房間人物
// 如果這個房間沒有 characterImage，就不顯示人物與對話熱區
// =========================

roomCharacterImage.className = "room-character-image";
roomCharacterHitbox.className = "room-character-hitbox";

if (room.characterImage && room.characterImage.trim() !== "") {
  roomCharacterImage.src = room.characterImage;

  if (room.characterClass) {
    roomCharacterImage.classList.add(room.characterClass);
  }

  roomCharacterImage.style.display = "block";

  if (room.characterHitboxClass) {
    roomCharacterHitbox.classList.add(room.characterHitboxClass);
  }

  roomCharacterHitbox.style.display = "block";
  roomCharacterHitbox.style.pointerEvents = "auto";
} else {
  roomCharacterImage.src = "";
  roomCharacterImage.style.display = "none";

  roomCharacterHitbox.style.display = "none";
  roomCharacterHitbox.style.pointerEvents = "none";
}

// 不再顯示開始對話按鈕，改成點人物開始對話
startRoomDialogueButton.style.display = "none";

  

  // 先隱藏對話框
  roomDialogueBox.style.display = "none";

  roomChoiceBox.style.display = "none";
  roomChoiceBox.innerHTML = "";
  nextRoomDialogueButton.style.display = "block";
  closeRoomDialogueButton.style.display = "flex";

  // =========================
  // 控制房間可點擊物件
  // =========================

  if (room.hotspots && room.hotspots.length > 0) {
    roomHotspotLayer.style.display = "block";

    roomHotspots.forEach(function (hotspot) {
      const hotspotName = hotspot.dataset.hotspot;

      if (room.hotspots.includes(hotspotName)) {
        hotspot.style.display = "block";
      } else {
        hotspot.style.display = "none";
      }
    });
  } else {
    roomHotspotLayer.style.display = "none";
  }

    roomCharacterImage.classList.remove("room-character-glow");
  roomInfoPanel.style.display = "none";
  roomDialogueBox.style.display = "none";

  setRoomInteractionEnabled(true);

  applyRandomHotspotTwinkle();
}

// 回到地圖
function showMapView() {
  currentRoom = null;
  currentRoomDialogueIndex = 0;

  isRoomDialogueOpen = false;
  isRoomInfoOpen = false;

  isEvidenceThoughtOpen = false;
  currentEvidence = null;
  isEvidenceDetailShown = false;
  pendingEvidenceThought = "";
  pendingEvidenceClueId = null;

  // 顯示地圖
  mapStage.style.display = "block";

  // 隱藏房間標題與回地圖按鈕
  roomTitlePanel.style.display = "none";
  backToMapButton.style.display = "none";
  roomHotspotCountText.textContent = "";

  // 隱藏房間人物與對話相關元素
  roomCharacterImage.style.display = "none";
  roomCharacterImage.classList.remove("room-character-glow");

  roomCharacterHitbox.style.display = "none";
  roomCharacterHitbox.style.pointerEvents = "none";

  startRoomDialogueButton.style.display = "none";
  roomDialogueBox.style.display = "none";

  // 隱藏房間可點擊物件
  roomHotspotLayer.style.display = "none";

  // 隱藏提示框
  roomInfoPanel.style.display = "none";

  // 清掉房間背景
  searchScreen.style.backgroundImage = "";
  searchScreen.style.backgroundColor = "#87bf69";
}

// 顯示目前房間對話
// 開始房間對話
function startRoomDialogue() {
  if (!currentRoom) {
    return;
  }

  openRoomDialogueMode();
  currentRoomDialogueIndex = 0;

  // 如果這個房間有主題式對話，就先顯示選項
  if (currentRoom.dialogueSections) {
    currentDialogueLines = [];
    currentDialogueSectionIndex = null;
    showDialogueChoices();
  }

  // 如果是舊的線性對話，就照原本方式播放
  else {
    currentDialogueLines = currentRoom.dialogues || [];
    currentDialogueSectionIndex = null;
    renderRoomDialogue();
  }
}

// 顯示對話選項
function showDialogueChoices() {
  if (!currentRoom || !currentRoom.dialogueSections) {
    return;
  }

  roomDialogueBox.style.display = "block";
  roomChoiceBox.innerHTML = "";
  roomChoiceBox.style.display = "flex";
  nextRoomDialogueButton.style.display = "none";

  // 選單時也要可以關閉
  closeRoomDialogueButton.style.display = "flex";

  const targetName = currentRoom.dialogueTargetName || currentRoom.title;

  roomDialogueSpeaker.textContent = "與 " + targetName + " 對話中";
  roomDialogueText.textContent = currentRoom.choiceIntroText || "想談哪件事？";

  currentRoom.dialogueSections.forEach(function (section, index) {
    const unlocked = isDialogueSectionUnlocked(section);
    const dialogueId = getDialogueSectionId(section, index);
    const viewed = isDialogueViewed(dialogueId);

    const choiceButton = document.createElement("button");
    choiceButton.className = "room-choice-button";
    choiceButton.textContent = getDialogueChoiceLabel(section, index);

    if (!unlocked) {
      choiceButton.disabled = true;
      choiceButton.classList.add("locked");
    }

    if (unlocked && viewed) {
      choiceButton.classList.add("read");
    }

    if (unlocked && !viewed && section.type === "trigger") {
      choiceButton.classList.add("new-unread");
    }

    choiceButton.addEventListener("click", function () {
      if (!unlocked) {
        return;
      }

      playClickSound();
      selectDialogueSection(index);
    });

    roomChoiceBox.appendChild(choiceButton);
  });
}

// 選擇某一段對話
function selectDialogueSection(sectionIndex) {
  const selectedSection = currentRoom.dialogueSections[sectionIndex];

  if (!selectedSection) {
    return;
  }

  // 鎖住的對話不能進入
  if (!isDialogueSectionUnlocked(selectedSection)) {
    return;
  }

  currentDialogueSectionIndex = sectionIndex;
  currentDialogueLines = selectedSection.lines;
  currentRoomDialogueIndex = 0;

  roomChoiceBox.style.display = "none";
  nextRoomDialogueButton.style.display = "block";

  renderRoomDialogue();
}

function setRoomInteractionEnabled(enabled) {
  // 控制人物能不能被滑鼠觸發
  if (enabled) {
    roomCharacterHitbox.style.pointerEvents = "auto";
  } else {
    roomCharacterHitbox.style.pointerEvents = "none";
  }

  // 控制房間物件能不能被點
  roomHotspots.forEach(function (hotspot) {
    if (enabled) {
      hotspot.style.pointerEvents = "auto";
    } else {
      hotspot.style.pointerEvents = "none";
    }
  });

  // 關閉互動時，順便移除人物光暈
  if (!enabled) {
    roomCharacterImage.classList.remove("room-character-glow");
  }
}

function openRoomDialogueMode() {
  isRoomDialogueOpen = true;
  isRoomInfoOpen = false;

  // 開啟人物對話時，一定要顯示叉叉
  closeRoomDialogueButton.style.display = "flex";

  // 開啟對話時，關閉物件說明框
  roomInfoPanel.style.display = "none";

  // 對話期間禁止人物與物件互動
  setRoomInteractionEnabled(false);
}

function closeRoomDialogueMode() {
  isRoomDialogueOpen = false;

  // 對話結束後恢復人物與物件互動
  setRoomInteractionEnabled(true);
}

function openRoomInfoPanel(title, text) {
  // 對話中不允許開啟物件說明
  if (isRoomDialogueOpen) {
    return;
  }

  isRoomInfoOpen = true;

  roomInfoTitle.textContent = title;
  roomInfoText.textContent = text;
  roomInfoPanel.style.display = "block";

  // 物件說明開啟時，禁止人物與其他物件互動
  setRoomInteractionEnabled(false);
}

function closeRoomInfoPanel() {
  isRoomInfoOpen = false;

  roomInfoPanel.style.display = "none";

  // 如果不是對話中，就恢復互動
  if (!isRoomDialogueOpen) {
    setRoomInteractionEnabled(true);
  }
}

// 顯示目前這一句對話
function renderRoomDialogue() {
  if (!currentRoom || currentDialogueLines.length === 0) {
    return;
  }

  const dialogue = currentDialogueLines[currentRoomDialogueIndex];

  roomDialogueSpeaker.textContent = dialogue.speaker;
  roomDialogueText.textContent = dialogue.text;

  roomDialogueBox.style.display = "block";
  roomChoiceBox.style.display = "none";
  nextRoomDialogueButton.style.display = "block";

  // 一般人物對話時，一定顯示叉叉
  closeRoomDialogueButton.style.display = "flex";

  // 最後一句時，按鈕文字改成「結束」
  if (currentRoomDialogueIndex === currentDialogueLines.length - 1) {
    nextRoomDialogueButton.textContent = "✓";
  } else {
    nextRoomDialogueButton.textContent = "→";
  }
}

// 結束目前這一段主題對話
function finishCurrentDialogueSection() {
  // 主題式對話，例如細姨、大哥、二哥、鄰居
  if (currentRoom.dialogueSections && currentDialogueSectionIndex !== null) {
    const selectedSection = currentRoom.dialogueSections[currentDialogueSectionIndex];
    const dialogueId = getDialogueSectionId(selectedSection, currentDialogueSectionIndex);

    // 標記這段對話已讀
    markDialogueViewed(dialogueId);

    // 保留舊 completed index，讓舊 requiredCompletedIndex 還能運作
    if (!completedDialogueSectionIndexes.includes(currentDialogueSectionIndex)) {
      completedDialogueSectionIndexes.push(currentDialogueSectionIndex);
    }

    // =========================
    // 第一次完成該段時，收集對應筆記
    // collectNote 本身會避免重複收集
    // =========================
    let hasNewNote = false;

    if (selectedSection.noteIds && selectedSection.noteIds.length > 0) {
      selectedSection.noteIds.forEach(function (noteId) {
        const collected = collectNote(noteId);

        if (collected) {
          hasNewNote = true;
        }
      });
    }

    if (hasNewNote) {
      showNotebookUpdateToast();
    }

    currentDialogueLines = [];
currentDialogueSectionIndex = null;
currentRoomDialogueIndex = 0;

// 如果已經收齊所有必要內容，直接進入結局前提示
if (checkEndingNoticeTrigger()) {
  return;
}

// 問完後回到同一個角色的選單
showDialogueChoices();

return;
  }

  // 舊的線性對話
  roomDialogueBox.style.display = "none";
  currentRoomDialogueIndex = 0;

  closeRoomDialogueMode();
}



// 點擊房間按鈕
roomButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    playClickSound();

    const roomKey = button.dataset.room;
    const selectedRoom = roomData[roomKey];

    if (selectedRoom.available) {
      enterRoom(selectedRoom);
    } else {
      openRoomInfoPanel(
  selectedRoom.title,
  "這個房間目前尚未開放。"
);
    }
  });
});

// 關閉房間資訊
closeRoomInfoButton.addEventListener("click", function (event) {
  event.stopPropagation();

  playClickSound();

  closeRoomInfoPanel();
});

roomInfoPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});

// 回到地圖
backToMapButton.addEventListener("click", function () {
  playClickSound();

  showMapView();
});

// =========================
// 房間人物互動：滑鼠移到人物才發光，點擊人物開始對話
// =========================

roomCharacterHitbox.addEventListener("mouseenter", function () {
  if (!currentRoom || isRoomDialogueOpen || isRoomInfoOpen) {
    return;
  }

  roomCharacterImage.classList.add("room-character-glow");
});

roomCharacterHitbox.addEventListener("mouseleave", function () {
  roomCharacterImage.classList.remove("room-character-glow");
});

roomCharacterHitbox.addEventListener("click", function () {
  if (!currentRoom || isRoomDialogueOpen || isRoomInfoOpen) {
    return;
  }

  playClickSound();

  startRoomDialogue();
});

// =========================
// 筆記本系統
// =========================

const notebookButton = document.getElementById("notebookButton");
const notebookOverlay = document.getElementById("notebookOverlay");
const closeNotebookButton = document.getElementById("closeNotebookButton");

const clueTypeLabel = document.getElementById("clueTypeLabel");
const cluePageTitle = document.getElementById("cluePageTitle");
const clueContent = document.getElementById("clueContent");
const clueImage = document.getElementById("clueImage");
const clueDescription = document.getElementById("clueDescription");
const cluePage = document.querySelector(".clue-page");
const clueHeader = document.querySelector(".clue-header");

const prevClueButton = document.getElementById("prevClueButton");
const nextClueButton = document.getElementById("nextClueButton");
const cluePageCounter = document.getElementById("cluePageCounter");

const notebookTabs = document.querySelectorAll(".notebook-tab");

// 線索資料
// 前 5 個是必要線索，後 5 個是次要線索
const clues = [
  
  {
    id: "required1",
    type: "關鍵證據-1",
    title: "藥箱裡的安眠藥",
    collected: false,
    image: "images/evidence/sleeping-pills.png",
    description: "這是安眠藥，從上面的字跡來看，似乎是細姨的筆跡。"
  },
  {
    id: "required2",
    type: "關鍵證據-2",
    title: "角落破損的石製紙鎮",
    collected: false,
    image: "images/evidence/father-paperweight.png",
    description: "父親鍾愛的石製紙鎮，角落有破損的痕跡。"
  },
  {
  id: "required3",
  type: "關鍵證據-3",
  title: "心臟病診斷證明",
  collected: false,
  image: "images/evidence/heart-diagnosis-open.png",
  description: "父親的心臟病診斷說明書。"
},
  {
  id: "required4",
  type: "關鍵證據-4",
  title: "沾血手帕",
  collected: false,
  image: "images/evidence/girls-handkerchief.png",
  description: "姐姐自己縫的手帕，上面有血跡。"
},
  {
    id: "secondary1",
    type: "次要證據-1",
    title: "細姨與小弟的照片",
    collected: false,
    image: "images/evidence/concubine-photo.png",
    description: "細姨與小弟在照相館拍的照片。"
  },
  {
    id: "secondary2",
    type: "次要證據-2",
    title: "契約",
    collected: false,
    image: "images/evidence/land-contract.png",
    description: "一份商業契約，上面有九條先生和父親的名字。"
  },
  {
    id: "secondary3",
    type: "次要證據-3",
    title: "父親的遺照",
    collected: false,
    image: "images/evidence/father-memorial-photo.png",
    description: "父親的遺照。"
  },
  {
  id: "secondary4",
  type: "次要證據-4",
  title: "沾有血跡的床頭櫃",
  collected: false,
  image: "images/evidence/father-bedside-corner.png",
  description: "櫃子上有血跡。"
},
  {
  id: "secondary5",
  type: "次要證據-5",
  title: "父親與陌生女性的親密書信",
  collected: false,
  image: "images/evidence/father-letter.png",
  description: "一封不知名女性寫給父親的親密信件，從筆跡來看不像是細姨的字。"
},
 {
  id: "secondary6",
  type: "次要證據-6",
  title: "哥哥的日記",
  collected: false,
  image: "images/evidence/brother-diary-open.png",
  description: "哥哥的日記，寫了一些關於事發當天的紀錄。"
},
    {
    id: "note01",
    type: "筆記",
    title: "筆記-1",
    collected: false,
    image: "",
    description: "有人拿鑰匙開門，誰會有鑰匙呢？去跟大哥確認一下吧！"
  },
  {
    id: "note02",
    type: "筆記",
    title: "筆記-2",
    collected: false,
    image: "",
    description: "郝先生說父親死前在和人吵架，還看到一個人影衝了出去，或許這是關鍵線索？"
  },
  {
    id: "note03",
    type: "筆記",
    title: "筆記-3",
    collected: false,
    image: "",
    description: "那陣子父親在和大哥吵架......去問問看其他人知不知道這件事吧。"
  },
  {
  id: "note04",
  type: "筆記",
  title: "筆記-4",
  collected: false,
  image: "",
  description: "二哥當天晚上喝醉了，很晚才到家。"
},
{
  id: "note05",
  type: "筆記",
  title: "筆記-5",
  collected: false,
  image: "",
  description: "細姨回家時只有大哥在家，他說父親可能是自己跌到撞到櫃子的。那郝先生說的，又是怎麼一回事呢？"
},
{
  id: "note06",
  type: "筆記",
  title: "筆記-6",
  collected: false,
  image: "",
  description: "安眠藥是細姨買給父親吃的。如果沒有控制好安眠藥劑量，父親有可能精神恍惚，甚至摔倒，所以平常安眠藥都由細姨保管的。"
},
{
  id: "note07",
  type: "筆記",
  title: "筆記-7",
  collected: false,
  image: "",
  description: "有細姨筆跡的安眠藥。為什麼家裡會有安眠藥，是給誰吃的？或許可以去問細姨。"
},
{
  id: "note08",
  type: "筆記",
  title: "筆記-8",
  collected: false,
  image: "",
  description: "看起來是父親和九條先生土地轉讓的契約，但我之前不知道這件事。可以去問其他人是否知道。"
},
{
  id: "note09",
  type: "筆記",
  title: "筆記-9",
  collected: false,
  image: "",
  description: "這是父親的遺照。他究竟是怎麼死的？我一定要弄清楚。"
},
  {
    id: "note10",
    type: "筆記",
    title: "筆記-10",
    collected: false,
    image: "",
    description: "二哥說大哥和父親是因為工作吵架，懷疑大哥讓父親心臟病發。"
  },
  {
    id: "note11",
    type: "筆記",
    title: "筆記-11",
    collected: false,
    image: "",
    description: "聽起來二哥不太想進入政府部門工作，覺得跟政府一起來的人品格不好。"
  },
  {
    id: "note12",
    type: "筆記",
    title: "筆記-12",
    collected: false,
    image: "",
    description: "這是父親很喜歡的紙鎮，但角落有破損的痕跡，像是大力撞擊下破碎的？真奇怪。"
  },
  {
    id: "note13",
    type: "筆記",
    title: "筆記-13",
    collected: false,
    image: "",
    description: "這上面的血跡或許和父親的死亡有關？"
  },
  {
    id: "note14",
    type: "筆記",
    title: "筆記-14",
    collected: false,
    image: "",
    description: "為什麼家裡會有不知名女性寫給父親的信？這件事細姨知道嗎？直接問細姨有點尷尬，或許可以去問其他人。"
  },
  {
    id: "note15",
    type: "筆記",
    title: "筆記-15",
    collected: false,
    image: "",
    description: "父親那時讓大哥去考公務員，所以他當天出門去找公務員的資料，回來時父親已經過世了。"
  },
  {
    id: "note16",
    type: "筆記",
    title: "筆記-16",
    collected: false,
    image: "",
    description: "大哥說父親是自己跌倒的，真的是這樣嗎？大哥說的不喜歡那群人，又是什麼意思？"
  },
  {
    id: "note17",
    type: "筆記",
    title: "筆記-17",
    collected: false,
    image: "",
    description: "大哥說細姨和小弟去照相館拍照，比他還晚一點回來。"
  },
  {
    id: "note18",
    type: "筆記",
    title: "筆記-18",
    collected: false,
    image: "",
    description: "父親過世時，房間有一些文件是散落的，契約還特別被拿出來，為什麼？"
  },
  {
    id: "note19",
    type: "筆記",
    title: "筆記-19",
    collected: false,
    image: "",
    description: "父親似乎在外面有其他的情感關係，細姨和父親因此吵架了。其他人看起來都知道這件事。"
  },
  {
    id: "note20",
    type: "筆記",
    title: "筆記-20",
    collected: false,
    image: "",
    description: "因為治安關係，最近大門都是鎖起來的。照大哥和郝先生的描述，當時進去和父親吵架的真的是家裡的人，和父親的死可能也有直接相關。"
  },
  {
    id: "note21",
    type: "筆記",
    title: "筆記-21",
    collected: false,
    image: "",
    description: "我知道父親有心臟病，當時是大哥帶父親去就醫的，醫生特別囑咐過不要讓父親有情緒上的巨大起伏，可能會有危險。"
  },
  {
    id: "note22",
    type: "筆記",
    title: "筆記-22",
    collected: false,
    image: "",
    description: "從大哥的日記看來，他是第一個發現父親遺體的人。"
  },
  {
    id: "note23",
    type: "筆記",
    title: "筆記-23",
    collected: false,
    image: "",
    description: "父親過世當天，大哥先因為工作關係出門，後來二哥也跟著出去找朋友。細姨和小弟晚一些時間去照相館拍照了。大姊自己也在晚餐前回家。"
  },
  {
    id: "note24",
    type: "筆記",
    title: "筆記-24",
    collected: false,
    image: "",
    description: "二哥去年向地下錢莊借錢，整體經濟又差，所以去跟父親要錢，但父親沒給。大姊說這就是他急著分遺產的原因。"
  },
  {
    id: "note25",
    type: "筆記",
    title: "筆記-25",
    collected: false,
    image: "",
    description: "契約內容是父親和九條先生的土地轉移契約，九條先生回日本前想將土地賣給父親。為了讓土地能順利轉移，父親似乎還將契約簽訂時間假造在戰爭結束之前。除了二哥以外，其他人都協助處理過這件事。"
  },
  {
    id: "note26",
    type: "筆記",
    title: "筆記-26",
    collected: false,
    image: "",
    description: "大姊生病了，是肺癆。所以手帕上的血應該是他咳嗽的血。聽大姊的說法，現在有許多人都染上這種病。"
  },
  {
    id: "note27",
    type: "筆記",
    title: "筆記-27",
    collected: false,
    image: "",
    description: "這是姐姐自己縫的手帕，他對於自己的刺繡特別自豪，所以我一眼就認出來了。但是上面有已經乾涸的血跡，為甚麼呢？要直接去問姐姐嗎？"
  },
  {
  id: "note28",
  type: "筆記",
  title: "筆記-28",
  collected: false,
  image: "",
  description: "二哥和朋友喝酒，很晚才回家，所以隔天才得知父親去世的消息。"
},
{
  id: "note29",
  type: "筆記",
  title: "筆記-29",
  collected: false,
  image: "",
  description: "大姊和姊夫最近身體狀況都不好，一直在咳嗽。"
},
];

let currentClueIndex = 0;
let isNotebookPageTurning = false;

const notebookCategories = {
  required: {
    label: "關鍵證據",
    startIndex: 0,
    endIndex: 3
  },

  secondary: {
    label: "次要證據",
    startIndex: 4,
    endIndex: 9
  },

  notes: {
    label: "筆記",
    startIndex: 10,
    endIndex: 38
  }
};

let currentNotebookTab = "required";
let updatedClueIndexes = [];

// =========================
// 結局前提示：收齊調查內容後觸發
// =========================

// 目前程式實際是 4 個關鍵證據 + 6 個次要證據
// 之後如果真的改成 5 + 5，只要改這個清單即可
const endingRequiredClueIds = [
  "required1",
  "required2",
  "required3",
  "required4",

  "secondary1",
  "secondary2",
  "secondary3",
  "secondary4",
  "secondary5",
  "secondary6"
];

// 目前筆記是 note01 ~ note29
const endingRequiredNoteIds = Array.from({ length: 29 }, function (_, index) {
  return "note" + String(index + 1).padStart(2, "0");
});

let isEndingNoticeTriggered = false;

function isCollectedNotebookItem(itemId) {
  const item = clues.find(function (clue) {
    return clue.id === itemId;
  });

  return item && item.collected === true;
}

function hasCollectedAllEndingRequirements() {
  const allCluesCollected = endingRequiredClueIds.every(function (itemId) {
    return isCollectedNotebookItem(itemId);
  });

  const allNotesCollected = endingRequiredNoteIds.every(function (itemId) {
    return isCollectedNotebookItem(itemId);
  });

  return allCluesCollected && allNotesCollected;
}

function openEndingNoticeScreen() {
  isEndingNoticeTriggered = true;

  // 關掉可能還開著的介面
  evidencePanel.style.display = "none";
  roomDialogueBox.style.display = "none";
  roomInfoPanel.style.display = "none";
  notebookOverlay.classList.remove("open");
  relationshipMapOverlay.classList.remove("open");

  // 清掉互動狀態，避免背景還能點
  isRoomDialogueOpen = false;
  isRoomInfoOpen = false;
  isEvidenceThoughtOpen = false;

  setRoomInteractionEnabled(false);

  showScreen(endingNoticeScreen);
}

function checkEndingNoticeTrigger() {
  if (isEndingNoticeTriggered) {
    return false;
  }

  if (!hasCollectedAllEndingRequirements()) {
    return false;
  }

  openEndingNoticeScreen();
  return true;
}

// =========================
// 打開調查筆記時，暫時隱藏對話框用
// =========================

let pausedDialogueForNotebook = false;

let savedRoomDialogueBoxDisplay = "";
let savedRoomChoiceBoxDisplay = "";
let savedNextRoomDialogueButtonDisplay = "";
let savedCloseRoomDialogueButtonDisplay = "";

function getNotebookTabByIndex(index) {
  if (index >= 0 && index <= 3) {
    return "required";
  }

  if (index >= 4 && index <= 9) {
    return "secondary";
  }

  return "notes";
}

function updateNotebookTabActiveState() {
  currentNotebookTab = getNotebookTabByIndex(currentClueIndex);

  notebookTabs.forEach(function (tab) {
    const tabName = tab.dataset.tab;

    if (tabName === currentNotebookTab) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

function markNotebookItemAsUpdated(index) {
  if (index < 0) {
    return;
  }

  if (!updatedClueIndexes.includes(index)) {
    updatedClueIndexes.push(index);
  }
}

function clearCurrentNotebookItemUpdate() {
  updatedClueIndexes = updatedClueIndexes.filter(function (index) {
    return index !== currentClueIndex;
  });
}

// 顯示目前這一頁線索
function renderNotebookPage() {
  const clue = clues[currentClueIndex];

  if (!clue) {
    return;
  }

  // 先更新頁籤狀態，避免永遠卡在人物關係圖
  updateNotebookTabActiveState();

  // 重置頁面 class
  cluePage.classList.remove("relationship-page");
  cluePage.classList.remove("note-page");
  cluePage.classList.remove("evidence-page");

  // 重置顯示狀態
  clueHeader.style.display = "block";
  clueTypeLabel.style.display = "block";
  cluePageTitle.style.display = "block";
  clueDescription.style.display = "block";

  // 如果玩家翻到已收集頁面，就視為已讀，移除紅點
  if (clue.collected) {
    clue.seen = true;
    clearCurrentNotebookItemUpdate();
  }

  // 更新頁籤紅點與右上角筆記本紅點
  updateNotebookUpdateIndicators();

  cluePageCounter.textContent = `${currentClueIndex + 1} / ${clues.length}`;

  // =========================
  // 尚未收集頁
  // =========================
  if (!clue.collected) {
    clueTypeLabel.textContent = clue.type;
    cluePageTitle.textContent = "???";

    clueContent.style.display = "flex";

    clueImage.style.display = "none";
    clueImage.src = "";

    clueDescription.style.display = "block";
    clueDescription.textContent = "???";

    updateNotebookButtons();

    return;
  }

  // =========================
  // 已收集的一般頁面
  // =========================
  clueTypeLabel.textContent = clue.type;
  cluePageTitle.textContent = clue.title;

  clueContent.style.display = "flex";
  clueDescription.style.display = "block";
  clueDescription.textContent = clue.description || "";

  // 筆記頁：只顯示文字
  if (clue.type === "筆記") {
    cluePage.classList.add("note-page");

    clueImage.style.display = "none";
    clueImage.src = "";
  }

  // 證據頁：顯示圖片
  else {
    cluePage.classList.add("evidence-page");

    if (clue.image && clue.image.trim() !== "") {
      clueImage.style.display = "block";
      clueImage.src = clue.image;
    } else {
      clueImage.style.display = "none";
      clueImage.src = "";
    }
  }

  updateNotebookButtons();
}

function hasUnseenItemInRange(startIndex, endIndex) {
  return updatedClueIndexes.some(function (index) {
    return index >= startIndex && index <= endIndex;
  });
}

function updateNotebookUpdateIndicators() {
  let hasAnyUpdate = false;

  notebookTabs.forEach(function (tab) {
    const tabName = tab.dataset.tab;
    const category = notebookCategories[tabName];

    if (!category) {
      return;
    }

    const hasUpdate = hasUnseenItemInRange(
      category.startIndex,
      category.endIndex
    );

    if (hasUpdate) {
      tab.classList.add("has-update");
      hasAnyUpdate = true;
    } else {
      tab.classList.remove("has-update");
    }
  });

  if (hasAnyUpdate) {
    notebookButton.classList.add("has-update");
  } else {
    notebookButton.classList.remove("has-update");
  }
}

function updateNotebookButtons() {
  if (currentClueIndex === 0) {
    prevClueButton.disabled = true;
  } else {
    prevClueButton.disabled = false;
  }

  if (currentClueIndex === clues.length - 1) {
    nextClueButton.disabled = true;
  } else {
    nextClueButton.disabled = false;
  }
}

function turnNotebookPage(direction) {
  if (isNotebookPageTurning) {
    return;
  }

  if (direction === "next" && currentClueIndex >= clues.length - 1) {
    return;
  }

  if (direction === "prev" && currentClueIndex <= 0) {
    return;
  }

  isNotebookPageTurning = true;

  playPageFlipSound();

  const outClass = direction === "next" ? "flip-next-out" : "flip-prev-out";
  const inClass = direction === "next" ? "flip-next-in" : "flip-prev-in";

  cluePage.classList.remove(
    "flip-next-out",
    "flip-next-in",
    "flip-prev-out",
    "flip-prev-in"
  );

  cluePage.classList.add(outClass);

  setTimeout(function () {
    if (direction === "next") {
      currentClueIndex++;
    } else {
      currentClueIndex--;
    }

    renderNotebookPage();

    cluePage.classList.remove(outClass);
    cluePage.classList.add(inClass);

    setTimeout(function () {
      cluePage.classList.remove(inClass);
      isNotebookPageTurning = false;
    }, 450);

  }, 450);
}

function pauseDialogueForNotebook() {
  // 如果目前沒有對話框，就不用處理
  const dialogueIsVisible =
    window.getComputedStyle(roomDialogueBox).display !== "none";

  if (!dialogueIsVisible) {
    pausedDialogueForNotebook = false;
    return;
  }

  pausedDialogueForNotebook = true;

  // 記住目前對話框內各元素的狀態
  savedRoomDialogueBoxDisplay = roomDialogueBox.style.display;
  savedRoomChoiceBoxDisplay = roomChoiceBox.style.display;
  savedNextRoomDialogueButtonDisplay = nextRoomDialogueButton.style.display;
  savedCloseRoomDialogueButtonDisplay = closeRoomDialogueButton.style.display;

  // 暫時隱藏對話框
  roomDialogueBox.style.display = "none";
}

function restoreDialogueAfterNotebook() {
  if (!pausedDialogueForNotebook) {
    return;
  }

  // 恢復打開筆記前的狀態
  roomDialogueBox.style.display = savedRoomDialogueBoxDisplay || "block";
  roomChoiceBox.style.display = savedRoomChoiceBoxDisplay;
  nextRoomDialogueButton.style.display = savedNextRoomDialogueButtonDisplay;
  closeRoomDialogueButton.style.display = savedCloseRoomDialogueButtonDisplay;

  pausedDialogueForNotebook = false;
}

// 打開筆記本
notebookButton.addEventListener("click", function () {
  playClickSound();

  pauseDialogueForNotebook();

  if (notebookUpdateToast) {
    notebookUpdateToast.classList.remove("show");
  }

  // 如果有多個未讀更新，先跳到最早取得的那一頁
  if (updatedClueIndexes.length > 0) {
  currentClueIndex = updatedClueIndexes[updatedClueIndexes.length - 1];
}

  notebookOverlay.classList.add("open");
  renderNotebookPage();
});

// 關閉筆記本
closeNotebookButton.addEventListener("click", function () {
  playClickSound();

  notebookOverlay.classList.remove("open");

  restoreDialogueAfterNotebook();
});

// 上一頁
prevClueButton.addEventListener("click", function () {
  turnNotebookPage("prev");
});

// 下一頁
nextClueButton.addEventListener("click", function () {
  turnNotebookPage("next");
});

notebookTabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    playPageFlipSound();

    const tabName = tab.dataset.tab;
    const category = notebookCategories[tabName];

    if (!category) {
      return;
    }

    currentNotebookTab = tabName;

    const firstUpdatedIndexInThisTab = updatedClueIndexes.find(function (index) {
      return index >= category.startIndex && index <= category.endIndex;
    });

    if (firstUpdatedIndexInThisTab !== undefined) {
      currentClueIndex = firstUpdatedIndexInThisTab;
    } else {
      currentClueIndex = category.startIndex;
    }

    renderNotebookPage();
  });
});

// 蒐集線索用的函式
// 之後在房間調查到線索時，就呼叫這個函式
function collectClue(clueId) {
  const clue = clues.find(function (item) {
    return item.id === clueId;
  });

  if (!clue) {
    return false;
  }

  if (clue.collected) {
    return false;
  }

  clue.collected = true;
  clue.seen = false;

  const clueIndex = clues.indexOf(clue);

  markNotebookItemAsUpdated(clueIndex);

  updateNotebookUpdateIndicators();

  if (notebookOverlay.classList.contains("open")) {
    renderNotebookPage();
  }

  return true;
}

function collectNote(noteId) {
  const note = clues.find(function (item) {
    return item.id === noteId;
  });

  if (!note) {
    return false;
  }

  if (note.collected) {
    return false;
  }

  note.collected = true;
  note.seen = false;

  const noteIndex = clues.indexOf(note);

  markNotebookItemAsUpdated(noteIndex);

  updateNotebookUpdateIndicators();

  if (notebookOverlay.classList.contains("open")) {
    renderNotebookPage();
  }

  return true;
}

const evidenceData = {
  heartCertificate: {
    type: "關鍵證據",
    title: "心臟病診斷證明",

    coverImage: "images/evidence/heart-diagnosis-closed.png",
    detailImage: "images/evidence/heart-diagnosis-open.png",

    description: "父親的心臟病診斷說明書。",
    diaryContent: "",

    thought: "",

    clueId: "required3",
noteIds: ["note21"]
  },

  fatherMemorialPhoto: {
  type: "次要證據",
  title: "父親的遺照",

  image: "images/evidence/father-memorial-photo.png",

  description: "父親的遺照被擺放在客廳裡。照片中的父親看起來神情嚴肅，像是在提醒著這個家中尚未解開的謎團。",

  diaryContent: "",
  thought: "",

  clueId: "secondary3",
noteIds: ["note09"]

  // 之後重排完成後，預計改成：
  // clueId: "secondary3",
  // noteIds: ["note09"]
},

  diary: {
    type: "次要證據",
    title: "哥哥的日記",

    coverImage: "images/evidence/brother-diary-closed.png",
    detailImage: "images/evidence/brother-diary-open.png",

    description: "寫了一些關於事發當天的紀錄。",

    contentLabel: "日記內容",

diaryPages: [
  "今天是2月xx日，上週晚上父親突然去世了。那天晚上，我回到家時看到他倒臥在櫃子旁邊，頭上有血跡。",

  "家中除了我沒有其他人，我其實根本不知道該怎麼辦。明明前一天早上還站在我眼前，讓我去找工作。人的生命真的能如此脆弱嗎？"
],

diaryContent: "",

    thought: "",

    clueId: "secondary6",
noteIds: ["note22"]
  },

  bigBrotherFuton: {
  type: "調查區域",
  title: "書寫桌、蒲團",

  image: "images/evidence/bigBrotherFuton.png",

  description: "榻榻米上用的桌子都矮矮的，比較少用高腳桌，因為擔心桌腳會刺穿榻榻米。再配上蒲團（當時的坐墊！），就不擔心久坐腰痛了～",

  diaryContent: "",
  thought: "",

  clueId: null
},

bigBrotherWindow: {
  type: "調查區域",
  title: "出窗",

  image: "images/evidence/bigBrotherWindow.png",

  description: "這種凸出的窗口可以讓室內擁有更好的採光和視野！（日式住宅通常配有花園喔，景色超棒的）。",

  diaryContent: "",
  thought: "",

  clueId: null
},

  fatherPaperweight: {
  type: "關鍵證據",
  title: "角落破損的石製紙鎮",

  image: "images/evidence/father-paperweight.png",

  description: "父親鍾愛的石製紙鎮，角落有破損的痕跡。",
  diaryContent: "",

  thought: "",

  clueId: "required2",
noteIds: ["note12"]
},

fatherBedsideCorner: {
  type: "次要證據",
  title: "沾有血跡的床頭櫃",

  image: "images/evidence/father-bedside-corner.png",

  description: "櫃子上有血跡。",
  diaryContent: "",

  thought: "",

  clueId: "secondary4",
noteIds: ["note13"]
},

fatherBedsideCabinet: {
  type: "調查區域",
  title: "床頭櫃",

  image: "images/evidence/father-bedside-cabinet.png",

  description: "在桌子上放一塊布，有的也會放蕾絲樣式的布。它不僅可以防塵，還可以避免木製的櫥櫃因潮濕而發霉。",
  diaryContent: "",

  clueId: null
},

fatherLetter: {
  type: "次要證據",
  title: "父親與陌生女性的親密書信",

  image: "images/evidence/father-letter.png",

  description: "一封不知名女性寫給父親的親密信件，從筆跡來看不像是細姨的字。",

  contentLabel: "書信內容",

  diaryPages: [
  "敬啟：櫻花也終於開始綻放了，不知您一切安好嗎？前些日子非常感謝您在咖啡廳與百貨公司的陪同相處。",

  "我度過了一段十分愉快的時光。另外，也非常感謝您送給我一直很想要的 Club 美身乳霜，我會好好珍惜使用的。",

  "若之後還能再一起出門走走，我會非常開心。今後也希望能有更多見面的機會。"
],

  closeOnlyOnFirstPage: true,

  thought: "",

  clueId: "secondary5",
noteIds: ["note14"],
},

sleepingPills: {
  type: "關鍵證據",
  title: "藥箱裡的安眠藥",

  image: "images/evidence/sleeping-pills.png",

  description: "這是安眠藥，從上面的字跡來看，似乎是細姨的筆跡。",

  diaryContent: "",

  thought: "",

  clueId: "required1",
noteIds: ["note07"]
},

concubinePhoto: {
  type: "次要證據",
  title: "細姨與小弟的照片",

  image: "images/evidence/concubine-photo.png",

  description: "細姨與小弟在照相館拍的照片。",

  diaryContent: "",

  thought: "",

  clueId: "secondary1",
noteIds: []
},

landContract: {
  type: "次要證據",
  title: "契約",

  image: "images/evidence/land-contract.png",

  description: "一份商業契約，上面有九條先生和父親的名字。",

  diaryContent: "",

  thought: "",

  clueId: "secondary2",
noteIds: ["note08"]
},

fatherOshiire: {
  type: "調查區域",
  title: "押入",

  image: "images/evidence/father-oshiire.png",

  description: "押入是日式住宅的空間魔術師喔！它可以將寢具都收起來，讓睡眠場所轉換為日常可使用的空間。",
  diaryContent: "",

  clueId: null
},
girlsHandkerchief: {
  type: "關鍵證據",
  title: "沾血手帕",

  image: "images/evidence/girls-handkerchief.png",

  description: "姐姐自己縫的手帕，上面有血跡。",

  diaryContent: "",
  thought: "",

  clueId: "required4",
noteIds: ["note27"]
},

girlsLotusPainting: {
  type: "調查區域",
  title: "裱框油畫",

  image: "images/evidence/girls-lotus-painting.png",

  description: "日治時期臺灣逐漸出現「地方色彩」，常畫自然風景，像是芭蕉等熱帶風氣！（不過這不是當時真實存在的油畫）",

  diaryContent: "",
  thought: "",

  clueId: null
},

girlsDresser: {
  type: "調查區域",
  title: "梳妝鏡+梳妝箱",

  image: "images/evidence/girls-dresser.png",

  description: "因為梳妝箱和鏡子的製作難度高，所以只有少數有錢人才能擁有喔！",

  diaryContent: "",
  thought: "",

  clueId: null
},
receptionIrisFlower: {
  type: "調查區域",
  title: "燕子花",

  image: "images/evidence/receptionIrisFlower.png",

  description: "這是當時花道常用的燕子花。在台日本婦女常會開課學習插花，台灣婦女耳濡目染，多多少少也會一點造花。",

  diaryContent: "",
  thought: "",

  clueId: null
},

kitchenIcebox: {
  type: "調查區域",
  title: "木製冰箱",

  image: "images/evidence/kitchen-icebox.png",

  description:
    "這款冰箱不需要插電，內層的金屬箱體加上冰塊，就可以達到冷藏的效果喔！",

  diaryContent: "",
  thought: "",
  clueId: null
},

bathBucket: {
  type: "調查區域",
  title: "打水桶",

  image: "images/evidence/bath-bucket.png",

  description: "當時還沒有熱水器喔！洗澡的時候都需要先燒水，再用木桶裝好，用杓子舀水，慢慢地洗澡。",

  diaryContent: "",
  thought: "",

  clueId: null
},

bathTub: {
  type: "調查區域",
  title: "浴缸",

  image: "images/evidence/bath-tub.png",

  description: "日治時期日本傳入泡澡習慣，有錢人家便會用瓷磚裝起一個浴缸，自己在家泡澡！",

  diaryContent: "",
  thought: "",

  clueId: null
},

kitchenCupboard: {
  type: "調查區域",
  title: "高型菜櫥",

  image: "images/evidence/kitchen-cupboard.png",

  description:
    "上面通風的地方可以放剩菜剩飯，避免食物腐爛酸臭，也可以避免貓貓狗狗偷吃！",

  diaryContent: "",
  thought: "",
  clueId: null
},

receptionWesternFurniture: {
  type: "調查區域",
  title: "洋式桌椅",

  image: "images/evidence/receptionWesternFurniture.png",

  description: "應接室和其他日式空間很不一樣，這裡使用的是洋式座椅。這樣的擺設非常氣派，也會讓客人感受到這個家庭的富貴榮華。",

  diaryContent: "",
  thought: "",

  clueId: null
}
};



let currentEvidence = null;
let isEvidenceDetailShown = false;

let isEvidenceThoughtOpen = false;
let pendingEvidenceThought = "";
let pendingEvidenceClueId = null;
let currentEvidenceDiaryPageIndex = 0;

function getEvidenceContentPages() {
  if (!currentEvidence) {
    return [];
  }

  if (currentEvidence.diaryPages && currentEvidence.diaryPages.length > 0) {
    return currentEvidence.diaryPages;
  }

  if (currentEvidence.diaryContent && currentEvidence.diaryContent.trim() !== "") {
    return [currentEvidence.diaryContent];
  }

  return [];
}

function renderEvidenceContentPage() {
  const pages = getEvidenceContentPages();

  evidenceCard.classList.remove("has-evidence-pages");
  evidenceCard.classList.remove("has-multiple-pages");

  // 沒有日記 / 書信內容
  if (pages.length === 0) {
    evidenceDiaryBlock.style.display = "none";
    evidenceDiaryText.textContent = "";
    evidenceDiaryControls.style.display = "none";
    evidenceDiaryCounter.textContent = "";
    evidenceCloseHint.style.display = "none";

    closeEvidenceButton.disabled = false;

    return;
  }

  // 有日記 / 書信內容
  evidenceCard.classList.add("has-evidence-pages");

  if (pages.length > 1) {
    evidenceCard.classList.add("has-multiple-pages");
  }

  evidenceDiaryBlock.style.display = "grid";

  evidenceDiaryTitle.textContent = currentEvidence.contentLabel || "日記內容";
  evidenceDiaryText.textContent = pages[currentEvidenceDiaryPageIndex];

  if (pages.length > 1) {
    evidenceDiaryControls.style.display = "flex";
    evidenceDiaryCounter.textContent =
      `${currentEvidenceDiaryPageIndex + 1} / ${pages.length}`;

    prevEvidenceDiaryButton.disabled = currentEvidenceDiaryPageIndex === 0;
    nextEvidenceDiaryButton.disabled =
      currentEvidenceDiaryPageIndex === pages.length - 1;
  } else {
    evidenceDiaryControls.style.display = "none";
    evidenceDiaryCounter.textContent = "";
  }

  closeEvidenceButton.disabled = false;
  evidenceCloseHint.style.display = "none";
}

function openEvidencePanel(evidenceKey) {
  if (isRoomDialogueOpen || isRoomInfoOpen) {
    return;
  }

  const evidence = evidenceData[evidenceKey];

  if (!evidence) {
    return;
  }

  currentEvidence = evidence;
  currentEvidenceDiaryPageIndex = 0;

  isRoomInfoOpen = true;

  // 每次打開證據時，先清掉上一個證據留下的狀態
  evidenceCard.classList.remove("detail-open");
  evidenceCard.classList.remove("letter-evidence");

  evidenceCard.classList.remove("has-evidence-pages");
  evidenceCard.classList.remove("has-multiple-pages");

  closeEvidenceButton.disabled = false;
  evidenceCloseHint.style.display = "none";

  evidenceType.textContent = evidence.type;
  evidenceTitle.textContent = evidence.title;

  pendingEvidenceThought = "";
  pendingEvidenceClueId = evidence.clueId || null;

  // 如果是父親的書信，就套用書信專用版面
  if (evidenceKey === "fatherLetter") {
    evidenceCard.classList.add("letter-evidence");
  }

  evidencePanel.style.display = "flex";

  setRoomInteractionEnabled(false);

  // =========================
  // 兩張圖版本：需要點擊圖片展開
  // 例如：大哥房的日記、診斷書
  // =========================
  if (evidence.coverImage && evidence.detailImage) {
    isEvidenceDetailShown = false;

    evidenceCard.classList.remove("detail-open");

    evidenceImage.src = evidence.coverImage;
    evidenceImage.classList.add("can-open");

    evidenceHint.textContent = "點擊圖片查看內容";
    evidenceHint.style.display = "block";

    evidenceReadingPanel.style.display = "none";

    evidenceDescription.style.display = "none";
    evidenceDescription.textContent = "";

    evidenceDiaryBlock.style.display = "none";
    evidenceDiaryText.textContent = "";

    evidenceDiaryControls.style.display = "none";
    evidenceDiaryCounter.textContent = "";
    evidenceCloseHint.style.display = "none";
    closeEvidenceButton.disabled = false;

    return;
  }

  // =========================
  // 單張圖版本：直接顯示圖片與說明
  // 例如：父親房的物件
  // =========================
  isEvidenceDetailShown = true;

  evidenceCard.classList.add("detail-open");

  evidenceImage.src = evidence.image || "";
  evidenceImage.classList.remove("can-open");

  evidenceHint.style.display = "none";

  evidenceReadingPanel.style.display = "flex";

  evidenceDescription.style.display = "block";
  evidenceDescription.textContent = evidence.description || "";

  // 這裡不要再手動判斷 diaryContent
  // 改交給 renderEvidenceContentPage() 統一處理
  renderEvidenceContentPage();
}

function showEvidenceDetail() {
  if (!currentEvidence || isEvidenceDetailShown) {
    return;
  }

  isEvidenceDetailShown = true;

  // 第二階段：切換成打開後的內容圖片
  evidenceImage.src =
  currentEvidence.image ||
  currentEvidence.detailImage ||
  currentEvidence.coverImage ||
  "";

  // 展開後進入書頁閱讀版面
  evidenceCard.classList.add("detail-open");

  // 展開後取消 hover / 可點擊提示
  evidenceImage.classList.remove("can-open");

  // 展開後不再顯示提示字
  evidenceHint.style.display = "none";

  evidenceReadingPanel.style.display = "flex";

  evidenceDescription.style.display = "block";
  evidenceDescription.textContent = currentEvidence.description;

  renderEvidenceContentPage();
}

// =========================
// 證據內容：上一頁 / 下一頁
// =========================

prevEvidenceDiaryButton.addEventListener("click", function (event) {
  event.stopPropagation();

  const pages = getEvidenceContentPages();

  if (currentEvidenceDiaryPageIndex > 0) {
    playPageFlipSound();

    currentEvidenceDiaryPageIndex--;
    renderEvidenceContentPage();
  }
});

nextEvidenceDiaryButton.addEventListener("click", function (event) {
  event.stopPropagation();

  const pages = getEvidenceContentPages();

  if (currentEvidenceDiaryPageIndex < pages.length - 1) {
    playPageFlipSound();

    currentEvidenceDiaryPageIndex++;
    renderEvidenceContentPage();
  }
});

evidenceImage.addEventListener("click", function (event) {
  event.stopPropagation();

  // 已經展開後，就不再有任何反應
  if (isEvidenceDetailShown) {
    return;
  }

  // 沒有 detailImage 的單張圖物件，不需要點擊展開
  if (!currentEvidence || !currentEvidence.detailImage) {
    return;
  }

  playPageFlipSound();
  showEvidenceDetail();
});

function closeEvidencePanel() {
   evidencePanel.style.display = "none";

  evidenceCard.classList.remove("detail-open");
  evidenceCard.classList.remove("letter-evidence");

  evidenceImage.classList.remove("can-open");
  evidenceReadingPanel.style.display = "none";

  currentEvidenceDiaryPageIndex = 0;
  closeEvidenceButton.disabled = false;
  evidenceCloseHint.style.display = "none";

  // 如果玩家還沒點開內容，就直接關閉，不觸發心聲
  if (!isEvidenceDetailShown) {
    currentEvidence = null;
    isRoomInfoOpen = false;
    pendingEvidenceThought = "";
    pendingEvidenceClueId = null;

    setRoomInteractionEnabled(true);

    return;
  }

  // 如果已經看過內容，先收集證據與筆記
collectCurrentEvidenceRewards();

// 如果有玩家心聲，才接玩家心聲
if (pendingEvidenceThought && pendingEvidenceThought.trim() !== "") {
  showEvidenceThought(
    pendingEvidenceThought,
    null
  );

  currentEvidence = null;
  isEvidenceDetailShown = false;
  pendingEvidenceThought = "";
  pendingEvidenceClueId = null;

  return;
}

  currentEvidence = null;
isEvidenceDetailShown = false;
isRoomInfoOpen = false;

if (!isRoomDialogueOpen) {
  setRoomInteractionEnabled(true);
}

// 如果已經收齊所有必要內容，直接進入結局前提示
checkEndingNoticeTrigger();
}

function collectCurrentEvidenceRewards() {
  if (!currentEvidence) {
    return false;
  }

  let hasUpdate = false;

  if (currentEvidence.clueId) {
    const collectedClue = collectClue(currentEvidence.clueId);

    if (collectedClue) {
      hasUpdate = true;
    }
  }

  if (currentEvidence.noteIds && currentEvidence.noteIds.length > 0) {
    currentEvidence.noteIds.forEach(function (noteId) {
      const collectedNote = collectNote(noteId);

      if (collectedNote) {
        hasUpdate = true;
      }
    });
  }

  if (hasUpdate) {
    showNotebookUpdateToast();
  }

  return hasUpdate;
}

function showEvidenceThought(thoughtText, clueId) {
  isEvidenceThoughtOpen = true;
  isRoomInfoOpen = true;

  setRoomInteractionEnabled(false);

  roomDialogueSpeaker.textContent = "我";
  roomDialogueText.textContent = thoughtText;

  roomChoiceBox.style.display = "none";
  nextRoomDialogueButton.style.display = "block";
  nextRoomDialogueButton.textContent = "✓";

  closeRoomDialogueButton.style.display = "none";
  roomDialogueBox.style.display = "block";

  if (clueId) {
    collectClue(clueId);
  }
}

closeEvidenceButton.addEventListener("click", function (event) {
  event.stopPropagation();

  // 如果現在是第 2 頁，關閉按鈕是 disabled，就不做事
  if (closeEvidenceButton.disabled) {
    return;
  }

  playClickSound();

  closeEvidencePanel();
});

evidencePanel.addEventListener("click", function (event) {
  event.stopPropagation();
});

roomHotspots.forEach(function (hotspot) {
  hotspot.addEventListener("click", function (event) {
    event.stopPropagation();

    if (isRoomDialogueOpen || isRoomInfoOpen) {
      return;
    }

    playClickSound();

    const hotspotName = hotspot.dataset.hotspot;

    openEvidencePanel(hotspotName);
  });
});

function closeRoomDialogueImmediately() {
  // 關閉對話框
  roomDialogueBox.style.display = "none";
  closeRoomDialogueButton.style.display = "none";

  // 關閉選項區
  roomChoiceBox.style.display = "none";
  roomChoiceBox.innerHTML = "";

  // 清空目前對話狀態
  currentDialogueLines = [];
  currentDialogueSectionIndex = null;
  currentRoomDialogueIndex = 0;

  // 如果正在顯示證據閱讀後的心聲，也一起關掉
  isEvidenceThoughtOpen = false;

  // 恢復按鈕文字
  nextRoomDialogueButton.textContent = "→";
  nextRoomDialogueButton.style.display = "block";

  // 關閉對話狀態
  isRoomDialogueOpen = false;
  isRoomInfoOpen = false;

  // 移除人物光暈
  roomCharacterImage.classList.remove("room-character-glow");

  // 恢復房間互動
  setRoomInteractionEnabled(true);
}

closeRoomDialogueButton.addEventListener("click", function (event) {
  event.stopPropagation();

  playClickSound();

  closeRoomDialogueImmediately();
});

roomDialogueBox.addEventListener("click", function (event) {
  event.stopPropagation();
});

nextRoomDialogueButton.addEventListener("click", function () {
  playClickSound();

  // 證據閱讀後的玩家心聲
  if (isEvidenceThoughtOpen) {
  isEvidenceThoughtOpen = false;
  isRoomInfoOpen = false;

  roomDialogueBox.style.display = "none";
  roomDialogueText.textContent = "";
  nextRoomDialogueButton.textContent = "→";

  // 心聲結束後先隱藏叉叉，下次人物對話開始時會再打開
  closeRoomDialogueButton.style.display = "none";

  if (!isRoomDialogueOpen) {
    setRoomInteractionEnabled(true);
  }

  return;
}

  // 一般房間對話 / 主題式對話
  if (!currentRoom || currentDialogueLines.length === 0) {
    return;
  }

  if (currentRoomDialogueIndex < currentDialogueLines.length - 1) {
    currentRoomDialogueIndex++;
    renderRoomDialogue();
  } else {
    finishCurrentDialogueSection();
  }
});

let notebookUpdateToastTimer = null;

function showNotebookUpdateToast() {
  if (!notebookUpdateToast) {
    return;
  }

  console.log("筆記更新觸發，準備播放音效");

  // 播放筆記更新音效
  playNotebookUpdateSound();

  if (notebookUpdateToastTimer !== null) {
    clearTimeout(notebookUpdateToastTimer);
    notebookUpdateToastTimer = null;
  }

  notebookUpdateToast.classList.remove("show");

  // 讓動畫可以重新觸發
  void notebookUpdateToast.offsetWidth;

  notebookUpdateToast.classList.add("show");

  notebookUpdateToastTimer = setTimeout(function () {
    notebookUpdateToast.classList.remove("show");
    notebookUpdateToastTimer = null;
  }, 3000);
}

relationshipMapButton.addEventListener("click", function () {
  playClickSound();

  relationshipMapOverlay.classList.add("open");

  // 打開人物關係圖時，暫時禁止房間互動
  if (currentRoom) {
    setRoomInteractionEnabled(false);
  }
});

closeRelationshipMapButton.addEventListener("click", function () {
  playClickSound();

  relationshipMapOverlay.classList.remove("open");

  // 關閉後恢復房間互動
  if (currentRoom && !isRoomDialogueOpen && !isRoomInfoOpen) {
    setRoomInteractionEnabled(true);
  }
});

relationshipMapOverlay.addEventListener("click", function (event) {
  event.stopPropagation();
});

// =========================
// 指認兇手階段
// =========================

const suspectDisplayNames = {
  bigBrother: "大哥",
  secondBrother: "二哥",
  bigSister: "大姊",
  concubine: "細姨"
};

// 依照你提供的表格：每個人物只需要選 2 個證據
const accusationEvidenceRequirements = {
  bigBrother: ["required3", "secondary4"],
  secondBrother: ["required2", "secondary2"],
  bigSister: ["required4", "secondary6"],
  concubine: ["required1", "secondary4"]
};

// =========================
// 指認後對話資料
// =========================

const accusationIntroLines = {
  bigBrother: [
    { scene: "livingroom", speaker: "玩家", text: "我認為父親的死和大哥有關。" },
    { scene: "livingroom", speaker: "大哥、大姊、細姨、二哥", text: "什麼？" },
    { scene: "livingroom", speaker: "大姊", text: "為什麼會這麼想？" }
  ],

  secondBrother: [
    { scene: "livingroom", speaker: "玩家", text: "我認為父親的死和二哥有關。" },
    { scene: "livingroom", speaker: "大哥、大姊、細姨、二哥", text: "什麼？" },
    { scene: "livingroom", speaker: "大哥", text: "為什麼會這麼想？" }
  ],

  bigSister: [
    { scene: "livingroom", speaker: "玩家", text: "我認為父親的死和大姊有關。" },
    { scene: "livingroom", speaker: "大哥、大姊、細姨、二哥", text: "什麼？" },
    { scene: "livingroom", speaker: "大姊", text: "為什麼會這麼想？" }
  ],

  concubine: [
    { scene: "livingroom", speaker: "玩家", text: "我認為父親的死和細姨有關。" },
    { scene: "livingroom", speaker: "大哥、大姊、細姨、二哥", text: "什麼？" },
    { scene: "livingroom", speaker: "細姨", text: "為什麼會這麼想？" }
  ]
};

const endingDialogueData = {
  bigBrother: {
    endingTitle: "未找到的兇手",
    lines: [
      { scene: "livingroom", speaker: "玩家", text: "大哥早就知道父親有心臟病吧？當初也是大哥帶父親去就醫，父親不能有情緒上的刺激，也是大哥跟我講的。" },
      { scene: "livingroom", speaker: "玩家", text: "郝先生說，父親死前有激動吵架的聲音，那天跟父親有吵架的，也就只有大哥了吧。" },
      { scene: "livingroom", speaker: "玩家", text: "我想，應該是大哥和父親吵架後，父親心臟病發才倒在床頭櫃上，撞到頭部過世的。" },
      { scene: "livingroom", speaker: "大哥", text: "我的確有跟父親吵架。但那是父親去世前幾天的事情。" },
      { scene: "livingroom", speaker: "大哥", text: "我是看不慣新來的人沒錯，他們看不起我們講日語，我也很不想去融入他們。" },
      { scene: "livingroom", speaker: "大哥", text: "但我是長子，我應該負起承擔家庭的責任。所以我在學習國語了，你也看到了。" },
      { scene: "livingroom", speaker: "大哥", text: "既然我都依照父親的意思，去找公務員的工作了，那我又何必回來跟他吵？" },
      { scene: "livingroom", speaker: "大姊", text: "是啊。大哥是沒有理由在那天晚上跟父親吵架的。" },
      { scene: "livingroom", speaker: "細姨", text: "我看龍男去世時的表情，不太像是之前病發那樣......" },
      { scene: "livingroom", speaker: "二哥", text: "既然這樣，那父親的死應該就是意外吧？" },
      { scene: "livingroom", speaker: "玩家", text: "但是......" },
      { scene: "livingroom", speaker: "二哥", text: "那我們來處理遺產的事情吧？" },
      { scene: "livingroom", speaker: "大姊", text: "也好。我們來討論吧。" },

      { scene: "sky", speaker: "玩家", text: "我後來私下找了大哥和其他人對話，父親的死真的跟大哥無關。" },
      { scene: "sky", speaker: "玩家", text: "我們那天後來討論了遺產分配。" },
      { scene: "sky", speaker: "玩家", text: "我跟大姊都想要分配到財產......尤其是那份契約，父親跟九條先生交易的財產價值實在很龐大。" },
      { scene: "sky", speaker: "玩家", text: "雖然現在的法律保障我跟大姊的繼承權，但其他人堅持要依照慣習。" },
      { scene: "sky", speaker: "玩家", text: "說是讓大哥、二哥和小弟先繼承財產後，大哥再私下分給我們。" },
      { scene: "sky", speaker: "玩家", text: "真沒想到會是這樣的結果啊......說起來，父親的死真的是意外嗎？我還是覺得哪裡有奇怪的地方。" }
    ]
  },

  bigSister: {
    endingTitle: "未找到的兇手",
    lines: [
      { scene: "livingroom", speaker: "玩家", text: "父親死亡時，頭上和櫃子都留下了血跡。依照大姊的說法，是隔天才得知父親死訊，沒有看到父親遺體的。" },
      { scene: "livingroom", speaker: "玩家", text: "但是，你的房間卻有沾著血跡的手帕？這是你在上學時繡的花紋，你以前常給我看，我不會認錯。" },
      { scene: "livingroom", speaker: "大姊", text: "……" },
      { scene: "livingroom", speaker: "大姊", text: "你們知道我最近身體不好，對吧？" },
      { scene: "livingroom", speaker: "二哥", text: "我知道這件事。" },
      { scene: "livingroom", speaker: "大姊", text: "我想，我是染上肺癆了。手帕上的血跡是我早上咳出來的血。" },
      { scene: "livingroom", speaker: "大姊", text: "不信的話，我丈夫應該也能幫我作證我的情況。" },
      { scene: "livingroom", speaker: "大哥", text: "幸子應該是搞錯了。" },
      { scene: "livingroom", speaker: "二哥", text: "既然這樣，那父親的死應該就是意外吧？" },
      { scene: "livingroom", speaker: "玩家", text: "但是......" },
      { scene: "livingroom", speaker: "二哥", text: "那我們來處理遺產的事情吧？" },
      { scene: "livingroom", speaker: "大姊", text: "也好。我們來討論吧。" },

      { scene: "sky", speaker: "玩家", text: "原來大姊染上肺癆了，我卻懷疑他。大姊最近身體狀況每況愈下，我看到許多人和大姊有一樣的情況。" },
      { scene: "sky", speaker: "玩家", text: "那天後來，我們討論了遺產分配。" },
      { scene: "sky", speaker: "玩家", text: "我跟大姊都想要分配到財產......尤其是那份契約，父親跟九條先生交易的財產價值實在很龐大。" },
      { scene: "sky", speaker: "玩家", text: "雖然現在的法律保障我跟大姊的繼承權，但其他人堅持要依照慣習。" },
      { scene: "sky", speaker: "玩家", text: "說是讓大哥、二哥和小弟先繼承財產後，大哥再私下分給我們。" },
      { scene: "sky", speaker: "玩家", text: "真沒想到會是這樣的結果啊......說起來，父親的死真的是意外嗎？我還是覺得哪裡有奇怪的地方。" }
    ]
  },

  concubine: {
    endingTitle: "未找到的兇手",
    lines: [
      { scene: "livingroom", speaker: "玩家", text: "細姨在父親死前，因為感情的事和父親有衝突，對吧？" },
      { scene: "livingroom", speaker: "玩家", text: "我想，平常都是細姨給父親安眠藥的，會不會是那天細姨故意給父親過量安眠藥，讓他恍惚間撞到櫃子？" },
      { scene: "livingroom", speaker: "玩家", text: "像之前那次跌倒一樣，但這次撞到櫃子？" },
      { scene: "livingroom", speaker: "細姨", text: "什麼啊？這完全不合理。" },
      { scene: "livingroom", speaker: "細姨", text: "確是跟龍男吵架了沒錯。但這不代表我要殺他！" },
      { scene: "livingroom", speaker: "細姨", text: "而且，我如果給他過量安眠藥，我又怎麼確保他會撞到櫃子上？" },
      { scene: "livingroom", speaker: "細姨", text: "你大哥也看到了，我帶著弟弟從照相館回來，那天拍的照都還擺在桌上。" },
      { scene: "livingroom", speaker: "細姨", text: "我中途要怎麼回來？難不成我帶著弟弟給龍男安眠藥，讓他看見父親死亡的樣子，再帶他出門？" },
      { scene: "livingroom", speaker: "細姨", text: "這完全不合理嘛！" },
      { scene: "livingroom", speaker: "大姊", text: "細姨說的在理。" },
      { scene: "livingroom", speaker: "二哥", text: "既然這樣，那父親的死應該就是意外吧？" },
      { scene: "livingroom", speaker: "玩家", text: "但是......" },
      { scene: "livingroom", speaker: "二哥", text: "那我們來處理遺產的事情吧？" },
      { scene: "livingroom", speaker: "大姊", text: "也好。我們來討論吧。" },

      { scene: "sky", speaker: "玩家", text: "細姨說的並沒有錯......是我錯怪他了。" },
      { scene: "sky", speaker: "玩家", text: "那天後來，我們討論了遺產分配。" },
      { scene: "sky", speaker: "玩家", text: "我跟大姊都想要分配到財產......尤其是那份契約，父親跟九條先生交易的財產價值實在很龐大。" },
      { scene: "sky", speaker: "玩家", text: "雖然現在的法律保障我跟大姊的繼承權，但其他人堅持要依照慣習。" },
      { scene: "sky", speaker: "玩家", text: "說是讓大哥、二哥和小弟先繼承財產後，大哥再私下分給我們。" },
      { scene: "sky", speaker: "玩家", text: "真沒想到會是這樣的結果啊......說起來，父親的死真的是意外嗎？我還是覺得哪裡有奇怪的地方。" }
    ]
  },

  secondBrother: {
    endingTitle: "真正的兇手",
    lines: [
      { scene: "livingroom", speaker: "玩家", text: "二哥最近在外面欠錢了，對吧？說是跟地下錢莊借錢，結果碰上物價大膨脹，生意沒做成，還倒欠了好多錢。" },
      { scene: "livingroom", speaker: "玩家", text: "聽大姊說，二哥去找父親要錢，但父親當時沒給。" },
      { scene: "livingroom", speaker: "玩家", text: "我想，那天晚上進家門的人應該就是二哥，他是偷偷去父親房間翻有沒有現金的，結果被父親發現。" },
      { scene: "livingroom", speaker: "玩家", text: "父親和二哥吵架後，二哥情緒失控拿紙鎮打了父親。" },
      { scene: "livingroom", speaker: "玩家", text: "所以父親的房間才散落了一地的文件。二哥可能是看到那份和九條先生的契約，想到還有遺產繼承能夠解決現在的情況。" },
      { scene: "livingroom", speaker: "玩家", text: "二哥才趕快將父親的屍體搬到櫃子旁，放上去後留下血跡。然後跑出去，直到深夜才回家。" },
      { scene: "livingroom", speaker: "二哥", text: "你......" },
      { scene: "livingroom", speaker: "二哥", text: "就算父親真的是被紙鎮敲死的，為什麼只懷疑我？" },
      { scene: "livingroom", speaker: "玩家", text: "這是你自己說的，大哥肌肉無力，沒辦法拿重物。至於大姊，最近都在咳嗽，你也知道他的身體狀況沒辦法讓他敲死父親。" },
      { scene: "livingroom", speaker: "玩家", text: "細姨就更不用說了，我們一直都知道細姨力氣不大，拿不起重物。" },
      { scene: "livingroom", speaker: "二哥", text: "……" },
      { scene: "livingroom", speaker: "大哥", text: "父親的死，真的與你有關？" },
      { scene: "livingroom", speaker: "大姊", text: "政夫？政夫！" },

      { scene: "sky", speaker: "玩家", text: "那天後來，二哥突然衝出家門，大哥非常生氣，去報了警。" },
      { scene: "sky", speaker: "玩家", text: "二哥因為殺人被判了刑。過一陣子後我們才想起來分配遺產的事。" },
      { scene: "sky", speaker: "玩家", text: "我跟大姊都想要分配到財產......尤其是那份契約，父親跟九條先生交易的財產價值實在很龐大。" },
      { scene: "sky", speaker: "玩家", text: "雖然現在的法律保障我跟大姊的繼承權，但其他人堅持要依照慣習。" },
      { scene: "sky", speaker: "玩家", text: "說是讓大哥和小弟先繼承財產後，大哥再私下分給我們。" },
      { scene: "sky", speaker: "玩家", text: "如果知道無論如何，都沒辦法分到遺產的話，我忙這一齣又是為了甚麼呢？" }
    ]
  }
};

let currentEndingLines = [];
let currentEndingLineIndex = 0;
let currentEndingTitle = "";
let pendingEvidenceSelectionAfterIntro = false;

function setAccusationScene(sceneName) {
  accusationScreen.classList.remove("sky-ending-scene");

  if (sceneName === "sky") {
    accusationScreen.style.backgroundImage =
      'linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.32)), url("images/sky-bg.jpg")';

    accusationScreen.classList.add("sky-ending-scene");

    endingLocationLabel.textContent = "地點：天空";
  } else {
    accusationScreen.style.backgroundImage =
      'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.45)), url("images/livingroom-bg.png")';

    endingLocationLabel.textContent = "地點：客廳";
  }
}

function getEndingActiveCharacterKey(speaker) {
  if (!speaker) {
    return null;
  }

  if (speaker.includes("大哥")) {
    return "bigBrother";
  }

  if (speaker.includes("二哥")) {
    return "secondBrother";
  }

  if (speaker.includes("大姊") || speaker.includes("大姐")) {
    return "bigSister";
  }

  if (speaker.includes("細姨")) {
    return "concubine";
  }

  return null;
}

function setEndingActiveCharacter(activeKey, sceneName) {
  Object.keys(endingCharacterImages).forEach(function (key) {
    const characterImage = endingCharacterImages[key];

    if (!characterImage) {
      return;
    }

    characterImage.classList.remove("active");
    characterImage.classList.remove("dimmed");

    // 天空獨白時不處理人物亮暗
    if (sceneName === "sky") {
      return;
    }

    // 玩家或多人一起說話時，全部正常顯示
    if (!activeKey) {
      return;
    }

    if (key === activeKey) {
      characterImage.classList.add("active");
    } else {
      characterImage.classList.add("dimmed");
    }
  });
}

function startEndingDialogue(lines, endingTitle, options = {}) {
  currentEndingLines = lines;
  currentEndingLineIndex = 0;
  currentEndingTitle = endingTitle || "";

  pendingEvidenceSelectionAfterIntro =
    options.goToEvidenceSelectionAfterEnd || false;

  accusationScreen.classList.add("story-mode");

  suspectSelectArea.style.display = "none";
  evidenceSelectArea.style.display = "none";
  endingResultArea.style.display = "none";

  endingDialogueArea.style.display = "block";

  renderEndingDialogueLine();
}

function renderEndingDialogueLine() {
  const line = currentEndingLines[currentEndingLineIndex];

  if (!line) {
    finishEndingDialogue();
    return;
  }

  const sceneName = line.scene || "livingroom";

  setAccusationScene(sceneName);

  endingDialogueSpeaker.textContent = line.speaker;
  endingDialogueText.textContent = line.text;

  const activeCharacterKey = getEndingActiveCharacterKey(line.speaker);
  setEndingActiveCharacter(activeCharacterKey, sceneName);

  if (currentEndingLineIndex === currentEndingLines.length - 1) {
    nextEndingDialogueButton.textContent = "✓";
  } else {
    nextEndingDialogueButton.textContent = "→";
  }
}

function goNextEndingDialogueLine() {
  playClickSound();

  if (currentEndingLineIndex < currentEndingLines.length - 1) {
    currentEndingLineIndex++;
    renderEndingDialogueLine();
  } else {
    finishEndingDialogue();
  }
}

function finishEndingDialogue() {
  endingDialogueArea.style.display = "none";

  // 如果這段是「指認開場」，結束後進入證據選擇
  if (pendingEvidenceSelectionAfterIntro) {
    pendingEvidenceSelectionAfterIntro = false;

    accusationScreen.classList.remove("story-mode");

    openEvidenceSelectionForSuspect(selectedSuspect);
    return;
  }

  // 如果這段是正式結局，顯示結局名稱
  endingResultTitle.textContent = currentEndingTitle;

  accusationScreen.classList.add("story-mode");
  endingResultArea.style.display = "flex";
}

// 指認階段顯示全部關鍵 + 次要證據
const accusationEvidenceOptions = [
  {
    id: "required1",
    code: "關鍵01",
    shortName: "安眠藥"
  },
  {
    id: "required2",
    code: "關鍵02",
    shortName: "石製紙鎮"
  },
  {
    id: "required3",
    code: "關鍵03",
    shortName: "心臟病診斷證明"
  },
  {
    id: "required4",
    code: "關鍵04",
    shortName: "沾血手帕"
  },
  {
    id: "secondary1",
    code: "次要01",
    shortName: "細姨與小弟照片"
  },
  {
    id: "secondary2",
    code: "次要02",
    shortName: "契約"
  },
  {
    id: "secondary3",
    code: "次要03",
    shortName: "父親遺照"
  },
  {
    id: "secondary4",
    code: "次要04",
    shortName: "血跡床頭櫃"
  },
  {
    id: "secondary5",
    code: "次要05",
    shortName: "親密書信"
  },
  {
    id: "secondary6",
    code: "次要06",
    shortName: "哥哥日記"
  }
];

let selectedSuspect = null;
let selectedAccusationEvidenceIds = [];

function startAccusationPhase() {
  selectedSuspect = null;
  selectedAccusationEvidenceIds = [];

  accusationErrorText.textContent = "";

  suspectSelectArea.style.display = "flex";
  evidenceSelectArea.style.display = "none";
  endingDialogueArea.style.display = "none";
  endingResultArea.style.display = "none";

  setAccusationScene("livingroom");

  showScreen(accusationScreen);
}

function openEvidenceSelectionForSuspect(suspectKey) {
  selectedSuspect = suspectKey;
  selectedAccusationEvidenceIds = [];

  selectedSuspectText.textContent =
    "你選擇指認：" + suspectDisplayNames[suspectKey];

  accusationErrorText.textContent = "";

  suspectSelectArea.style.display = "none";
  evidenceSelectArea.style.display = "flex";

  renderAccusationEvidenceCards();
}

function renderAccusationEvidenceCards() {
  accusationEvidenceGrid.innerHTML = "";

  accusationEvidenceOptions.forEach(function (option) {
    const clue = clues.find(function (item) {
      return item.id === option.id;
    });

    const card = document.createElement("button");
    card.className = "accusation-evidence-card";
    card.dataset.evidenceId = option.id;

    if (selectedAccusationEvidenceIds.includes(option.id)) {
      card.classList.add("selected");
    }

    const img = document.createElement("img");
    img.className = "accusation-evidence-image";

    if (clue && clue.image) {
      img.src = clue.image;
    } else {
      img.style.display = "none";
    }

    const code = document.createElement("div");
    code.className = "accusation-evidence-code";
    code.textContent = option.code;

    const name = document.createElement("div");
    name.className = "accusation-evidence-name";
    name.textContent = option.shortName;

    card.appendChild(img);
    card.appendChild(code);
    card.appendChild(name);

    card.addEventListener("click", function () {
      toggleAccusationEvidence(option.id);
    });

    accusationEvidenceGrid.appendChild(card);
  });

  updateAccusationEvidenceCounter();
}

function toggleAccusationEvidence(evidenceId) {
  accusationErrorText.textContent = "";

  if (selectedAccusationEvidenceIds.includes(evidenceId)) {
    selectedAccusationEvidenceIds =
      selectedAccusationEvidenceIds.filter(function (id) {
        return id !== evidenceId;
      });
  } else {
    if (selectedAccusationEvidenceIds.length >= 2) {
      accusationErrorText.textContent = "一次只能選擇 2 項證據。";
      return;
    }

    selectedAccusationEvidenceIds.push(evidenceId);
  }

  renderAccusationEvidenceCards();
}

function updateAccusationEvidenceCounter() {
  selectedEvidenceCounter.textContent =
    "已選擇：" + selectedAccusationEvidenceIds.length + " / 2";

  confirmAccusationButton.disabled =
    selectedAccusationEvidenceIds.length !== 2;
}

function areEvidenceSetsEqual(playerSelectedIds, requiredIds) {
  if (playerSelectedIds.length !== requiredIds.length) {
    return false;
  }

  const playerSorted = [...playerSelectedIds].sort();
  const requiredSorted = [...requiredIds].sort();

  return playerSorted.every(function (id, index) {
    return id === requiredSorted[index];
  });
}

function confirmAccusation() {
  if (!selectedSuspect) {
    return;
  }

  if (selectedAccusationEvidenceIds.length !== 2) {
    accusationErrorText.textContent = "請選擇 2 項證據。";
    return;
  }

  const requiredEvidenceIds = accusationEvidenceRequirements[selectedSuspect];

  if (!areEvidenceSetsEqual(selectedAccusationEvidenceIds, requiredEvidenceIds)) {
    accusationErrorText.textContent =
      "這些證據還不足以支撐你的指認。";

    return;
  }

  // 下一步會在這裡接入結局對話
  const endingData = endingDialogueData[selectedSuspect];

startEndingDialogue(
  endingData.lines,
  endingData.endingTitle
);
}

suspectButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    playClickSound();

    const suspectKey = button.dataset.suspect;

    selectedSuspect = suspectKey;
    selectedAccusationEvidenceIds = [];

    accusationErrorText.textContent = "";

    startEndingDialogue(
      accusationIntroLines[suspectKey],
      "",
      { goToEvidenceSelectionAfterEnd: true }
    );
  });
});

backToSuspectButton.addEventListener("click", function () {
  playClickSound();

  selectedSuspect = null;
  selectedAccusationEvidenceIds = [];

  accusationErrorText.textContent = "";

  endingDialogueArea.style.display = "none";
  endingResultArea.style.display = "none";
  evidenceSelectArea.style.display = "none";
  suspectSelectArea.style.display = "flex";

  setAccusationScene("livingroom");
});

confirmAccusationButton.addEventListener("click", function () {
  playClickSound();

  confirmAccusation();
});

nextEndingDialogueButton.addEventListener("click", function () {
  goNextEndingDialogueLine();
});

endingNoticeDoneButton.addEventListener("click", function () {
  playClickSound();

  startAccusationPhase();
});