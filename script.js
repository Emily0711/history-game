// =========================
// 取得 HTML 元素
// =========================

const startScreen = document.getElementById("startScreen");
const prologueScreen = document.getElementById("prologueScreen");

const startButton = document.getElementById("startButton");

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

const searchScreen = document.getElementById("searchScreen");

const investigationStartPanel = document.getElementById("investigationStartPanel");
const investigationStartButton = document.getElementById("investigationStartButton");
// =========================
// 音效
// =========================

const clickSound = new Audio("click.mp3");
const pageFlipSound = new Audio("page-flip.mp3");

// 播放點擊音效
function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function playPageFlipSound() {
  pageFlipSound.currentTime = 0;
  pageFlipSound.play();
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
    text: "因為他有話要跟我說，所以我先請他到會客室等待了。",
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
    text: "沒關係……如果杏子有疑問，就讓她查吧。",
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

    // 隱藏人物
    characterImage.style.display = "none";

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
  if (currentLine.characterImage) {
    characterImage.src = currentLine.characterImage;
    characterImage.style.display = "block";
  } else {
    characterImage.style.display = "none";
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
  prologueScreen.classList.remove("active");
  searchScreen.classList.remove("active");

  screenToShow.classList.add("active");
}

// =========================
// 開始遊戲按鈕
// =========================

startButton.addEventListener("click", function () {
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

// 點擊電報圖片後，進入下一句
telegramImage.addEventListener("click", function () {
  playPageFlipSound();

  telegramMagnifier.style.display = "none";

  if (currentPrologueIndex < prologueLines.length - 1) {
    currentPrologueIndex++;
    updatePrologueText();
  }
});

// =========================
// 電報放大鏡效果
// =========================

const magnifierZoom = 2.2;

telegramImage.addEventListener("mouseenter", function () {
  telegramMagnifier.style.display = "block";
  telegramMagnifier.style.backgroundImage = `url("${telegramImage.src}")`;
});

telegramImage.addEventListener("mouseleave", function () {
  telegramMagnifier.style.display = "none";
});

telegramImage.addEventListener("mousemove", function (event) {
  const imageRect = telegramImage.getBoundingClientRect();

  const mouseX = event.clientX - imageRect.left;
  const mouseY = event.clientY - imageRect.top;

  const lensWidth = telegramMagnifier.offsetWidth;
  const lensHeight = telegramMagnifier.offsetHeight;

  // 放大鏡距離滑鼠右邊的距離
  const offsetX = 28;

  // 放大鏡顯示在滑鼠右邊，垂直方向對齊滑鼠中心
  telegramMagnifier.style.left = event.clientX + offsetX + "px";
  telegramMagnifier.style.top = event.clientY - lensHeight / 2 + "px";

  telegramMagnifier.style.backgroundSize =
    imageRect.width * magnifierZoom + "px " + imageRect.height * magnifierZoom + "px";

  // 放大內容仍然對應滑鼠目前指到的位置
  telegramMagnifier.style.backgroundPosition =
    "-" + (mouseX * magnifierZoom - lensWidth / 2) + "px " +
    "-" + (mouseY * magnifierZoom - lensHeight / 2) + "px";
});

// 點擊「調查開始」後，進入搜索階段
investigationStartButton.addEventListener("click", function () {
  playClickSound();

  investigationStartPanel.style.display = "none";

  showScreen(searchScreen);
  showMapView();
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

const roomTitlePanel = document.getElementById("roomTitlePanel");
const roomTitleText = document.getElementById("roomTitleText");
const backToMapButton = document.getElementById("backToMapButton");

const roomCharacterImage = document.getElementById("roomCharacterImage");
const startRoomDialogueButton = document.getElementById("startRoomDialogueButton");
const roomDialogueBox = document.getElementById("roomDialogueBox");

const roomHotspotLayer = document.getElementById("roomHotspotLayer");
const roomHotspots = document.querySelectorAll(".room-hotspot");

const roomDialogueSpeaker = document.getElementById("roomDialogueSpeaker");
const roomDialogueText = document.getElementById("roomDialogueText");
const nextRoomDialogueButton = document.getElementById("nextRoomDialogueButton");

let currentRoom = null;
let currentRoomDialogueIndex = 0;

// 房間資料
const roomData = {
  bigBrother: {
    title: "大哥房",
    available: true,
    background: "images/rooms/big-brother-room.png",
    characterImage: "images/big-brother.png",
    hotspots: ["diary", "paper"],
    dialogues: [
      {
        speaker: "大哥",
        text: "你來找我，是想問父親過世那天的事情吧？"
      },
      {
        speaker: "玩家",
        text: "是的。我想知道那天家裡到底發生了什麼。"
      },
      {
        speaker: "大哥",
        text: "那天……我記得家裡的氣氛確實有些不對勁。"
      }
    ]
  },

  father: {
    title: "爸爸房",
    available: true,
    background: "images/rooms/father-room.jpg",
    characterImage: "images/second-brother.png",
    dialogues: [
      {
        speaker: "二哥",
        text: "你怎麼跑來父親的房間？"
      },
      {
        speaker: "玩家",
        text: "我想看看父親生前留下了什麼。"
      },
      {
        speaker: "二哥",
        text: "這裡的東西最好不要亂動。"
      }
    ]
  },

  girls: {
    title: "女生房",
    available: true,
    background: "images/rooms/girls-room.png",
    characterImage: "images/big-sister.png",
    dialogues: [
      {
        speaker: "大姊",
        text: "杏子，你回到這個房間，應該有很多感覺吧。"
      },
      {
        speaker: "玩家",
        text: "嗯……這裡和我記憶中很像，卻又有點陌生。"
      },
      {
        speaker: "大姊",
        text: "你想知道什麼，我會盡量告訴你。"
      }
    ]
  },

  zashiki: {
    title: "座敷",
    available: true,
    background: "images/rooms/zashiki-room.png",
    characterImage: "images/concubine-right.png",
    dialogues: [
      {
        speaker: "細姨",
        text: "你怎麼來座敷了？"
      },
      {
        speaker: "玩家",
        text: "我想從大家平常聚集的地方開始查起。"
      },
      {
        speaker: "細姨",
        text: "有些事情……也許不是知道得越多越好。"
      }
    ]
  },

  bath: {
    title: "風呂",
    available: false
  },

  toilet: {
    title: "便所",
    available: false
  },

  reception: {
    title: "應接室",
    available: false
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
    available: false
  }
};

// 進入房間
function enterRoom(room) {
  currentRoom = room;
  currentRoomDialogueIndex = 0;

  // 隱藏地圖
  mapStage.style.display = "none";

  // 隱藏房間提示框
  roomInfoPanel.style.display = "none";

  // 顯示房間標題與回地圖按鈕
  roomTitlePanel.style.display = "block";
  backToMapButton.style.display = "block";

  // 顯示房名
  roomTitleText.textContent = room.title;

  // 切換房間背景
  searchScreen.style.backgroundImage =
    `linear-gradient(rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.28)), url("${room.background}")`;

  searchScreen.style.backgroundColor = "#111111";

  // 顯示房間人物
  roomCharacterImage.src = room.characterImage;
  roomCharacterImage.style.display = "block";

  // 不再顯示開始對話按鈕，改成點人物開始對話
  startRoomDialogueButton.style.display = "none";

  // 先隱藏對話框
  roomDialogueBox.style.display = "none";

  // 控制房間可點擊物件
if (room.hotspots) {
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
}

// 回到地圖
function showMapView() {
  currentRoom = null;
  currentRoomDialogueIndex = 0;

  // 顯示地圖
  mapStage.style.display = "block";

  // 隱藏房間標題與回地圖按鈕
  roomTitlePanel.style.display = "none";
  backToMapButton.style.display = "none";

  // 隱藏房間人物與對話相關元素
  roomCharacterImage.style.display = "none";
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
function renderRoomDialogue() {
  if (!currentRoom) {
    return;
  }

  const dialogue = currentRoom.dialogues[currentRoomDialogueIndex];

  roomDialogueSpeaker.textContent = dialogue.speaker;
  roomDialogueText.textContent = dialogue.text;

  roomDialogueBox.style.display = "block";

  // 最後一句時，按鈕文字改成「結束」
  if (currentRoomDialogueIndex === currentRoom.dialogues.length - 1) {
    nextRoomDialogueButton.textContent = "✓";
  } else {
    nextRoomDialogueButton.textContent = "→";
  }
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
      roomInfoTitle.textContent = selectedRoom.title;
      roomInfoText.textContent = "這個房間目前尚未開放。";
      roomInfoPanel.style.display = "block";
    }
  });
});

// 關閉房間資訊
closeRoomInfoButton.addEventListener("click", function () {
  playClickSound();

  roomInfoPanel.style.display = "none";
});

// 回到地圖
backToMapButton.addEventListener("click", function () {
  playClickSound();

  showMapView();
});

// 點擊房間人物後開始對話
roomCharacterImage.addEventListener("click", function () {
  if (!currentRoom) {
    return;
  }

  playClickSound();

  currentRoomDialogueIndex = 0;
  renderRoomDialogue();
});

// 下一句房間對話
nextRoomDialogueButton.addEventListener("click", function () {
  playClickSound();

  if (!currentRoom) {
    return;
  }

  if (currentRoomDialogueIndex < currentRoom.dialogues.length - 1) {
    currentRoomDialogueIndex++;
    renderRoomDialogue();
  } else {
    roomDialogueBox.style.display = "none";
    startRoomDialogueButton.style.display = "block";
    currentRoomDialogueIndex = 0;
  }
});

nextRoomDialogueButton.addEventListener("click", function () {
  playClickSound();

  if (!currentRoom) {
    return;
  }

  if (currentRoomDialogueIndex < currentRoom.dialogues.length - 1) {
    currentRoomDialogueIndex++;
    renderRoomDialogue();
  } else {
    roomDialogueBox.style.display = "none";
    startRoomDialogueButton.style.display = "block";
    currentRoomDialogueIndex = 0;
  }
});

// ✅ 第 7 步：點擊房間內可調查物件
// 請貼在這裡
roomHotspots.forEach(function (hotspot) {
  hotspot.addEventListener("click", function () {
    playClickSound();

    const hotspotName = hotspot.dataset.hotspot;

    if (hotspotName === "diary") {
      roomInfoTitle.textContent = "日記本";
      roomInfoText.textContent = "你翻開了桌上的日記本。裡面似乎記錄著大哥近期的煩惱與家中的異常。";

      // 之後如果要把它加入筆記本線索，可以啟用這行
      // collectClue("required1");

      roomInfoPanel.style.display = "block";
    }

    if (hotspotName === "paper") {
      roomInfoTitle.textContent = "摺起的紙張";
      roomInfoText.textContent = "你發現櫃子上放著一張摺起的紙。紙張看起來不像是隨手放置的。";

      // 之後如果要把它加入筆記本線索，可以啟用這行
      // collectClue("required2");

      roomInfoPanel.style.display = "block";
    }
  });
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

const prevClueButton = document.getElementById("prevClueButton");
const nextClueButton = document.getElementById("nextClueButton");
const cluePageCounter = document.getElementById("cluePageCounter");

// 線索資料
// 前 5 個是必要線索，後 5 個是次要線索
const clues = [
  {
    id: "required1",
    type: "必要線索",
    title: "必要線索-1",
    collected: false,
    image: "images/clues/required-1.png",
    description: "這裡之後放必要線索 1 的說明。"
  },
  {
    id: "required2",
    type: "必要線索",
    title: "必要線索-2",
    collected: false,
    image: "images/clues/required-2.png",
    description: "這裡之後放必要線索 2 的說明。"
  },
  {
    id: "required3",
    type: "必要線索",
    title: "必要線索-3",
    collected: false,
    image: "images/clues/required-3.png",
    description: "這裡之後放必要線索 3 的說明。"
  },
  {
    id: "required4",
    type: "必要線索",
    title: "必要線索-4",
    collected: false,
    image: "images/clues/required-4.png",
    description: "這裡之後放必要線索 4 的說明。"
  },
  {
    id: "required5",
    type: "必要線索",
    title: "必要線索-5",
    collected: false,
    image: "images/clues/required-5.png",
    description: "這裡之後放必要線索 5 的說明。"
  },
  {
    id: "secondary1",
    type: "次要線索",
    title: "次要線索-1",
    collected: false,
    image: "images/clues/secondary-1.png",
    description: "這裡之後放次要線索 1 的說明。"
  },
  {
    id: "secondary2",
    type: "次要線索",
    title: "次要線索-2",
    collected: false,
    image: "images/clues/secondary-2.png",
    description: "這裡之後放次要線索 2 的說明。"
  },
  {
    id: "secondary3",
    type: "次要線索",
    title: "次要線索-3",
    collected: false,
    image: "images/clues/secondary-3.png",
    description: "這裡之後放次要線索 3 的說明。"
  },
  {
    id: "secondary4",
    type: "次要線索",
    title: "次要線索-4",
    collected: false,
    image: "images/clues/secondary-4.png",
    description: "這裡之後放次要線索 4 的說明。"
  },
  {
    id: "secondary5",
    type: "次要線索",
    title: "次要線索-5",
    collected: false,
    image: "images/clues/secondary-5.png",
    description: "這裡之後放次要線索 5 的說明。"
  }
];

let currentClueIndex = 0;
let isNotebookPageTurning = false;

// 顯示目前這一頁線索
function renderNotebookPage() {
  const clue = clues[currentClueIndex];

  clueTypeLabel.textContent = clue.type;
  cluePageTitle.textContent = clue.title;
  cluePageCounter.textContent = `${currentClueIndex + 1} / ${clues.length}`;

  // 如果已經蒐集到，顯示圖片與說明
  if (clue.collected) {
    clueContent.style.display = "flex";
    clueImage.src = clue.image;
    clueDescription.textContent = clue.description;
  }

  // 如果還沒蒐集到，內容保持空白，只顯示標題
  else {
    clueContent.style.display = "none";
    clueImage.src = "";
    clueDescription.textContent = "";
  }

  // 控制上一頁 / 下一頁按鈕
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

// 打開筆記本
notebookButton.addEventListener("click", function () {
  playClickSound();

  notebookOverlay.classList.add("open");
  renderNotebookPage();
});

// 關閉筆記本
closeNotebookButton.addEventListener("click", function () {
  playClickSound();

  notebookOverlay.classList.remove("open");
});

// 上一頁
prevClueButton.addEventListener("click", function () {
  turnNotebookPage("prev");
});

// 下一頁
nextClueButton.addEventListener("click", function () {
  turnNotebookPage("next");
});

// 蒐集線索用的函式
// 之後在房間調查到線索時，就呼叫這個函式
function collectClue(clueId) {
  const clue = clues.find(function (item) {
    return item.id === clueId;
  });

  if (clue) {
    clue.collected = true;
  }

  // 如果筆記本正打開，就即時更新畫面
  if (notebookOverlay.classList.contains("open")) {
  renderNotebookPage();
  }
}