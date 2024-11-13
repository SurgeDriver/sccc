let test = "aaabbbcccccccccccccccfffff";
const lettersCount = (str) => {
  return str
    .split("")
    .reduce((obj, char) => ((obj[char] = (obj[char] || 0) + 1), obj), {});
};

const qwertyMap = {
  й: "i",
  ц: "й",
  у: "ц",
  к: "у",
  е: "к",
  н: "е",
  г: "н",
  ш: "г",
  щ: "ш",
  з: "щ",
  х: "з",
  ф: "х",
  ы: "ф",
  в: "ы",
  а: "в",
  п: "а",
  р: "п",
  о: "р",
  л: "о",
  д: "л",
  ж: "д",
  э: "ж",
  я: "э",
  ч: "я",
  с: "ч",
  м: "с",
  и: "м",
  т: "и",
  ь: "т",
  б: "ь",
  ю: "б",
  Й: "I",
  Ц: "Й",
  У: "Ц",
  К: "У",
  Е: "К",
  Н: "Е",
  Г: "Н",
  Ш: "Г",
  Щ: "Ш",
  З: "Щ",
  Х: "З",
  Ф: "Х",
  Ы: "Ф",
  В: "Ы",
  А: "В",
  П: "А",
  Р: "П",
  О: "Р",
  Л: "О",
  Д: "Л",
  Ж: "Д",
  Э: "Ж",
  Я: "Э",
  Ч: "Я",
  С: "Ч",
  М: "С",
  И: "М",
  Т: "И",
  Ь: "Т",
  Б: "Ь",
  Ю: "Б",
};

const reverseQwertyMap = Object.fromEntries(
  Object.entries(qwertyMap).map(([key, value]) => [value, key])
);

function encrypt(text) {
  return text
    .split("")
    .map((char) => qwertyMap[char] || char)
    .join("");
}

function decrypt(text) {
  return text
    .split("")
    .map((char) => reverseQwertyMap[char] || char)
    .join("");
}

let encryptCopy = document.querySelector(".encryptCopy");
let encryptInput = document.querySelector(".encryptInput");

let decryptCopy = document.querySelector(".decryptCopy");
let decryptInput = document.querySelector(".decryptInput");

encryptInput.addEventListener("input", function () {
  encryptCopy.textContent = encrypt(encryptInput.value) || "клик ту копи";
});
decryptInput.addEventListener("input", function () {
  decryptCopy.textContent = decrypt(decryptInput.value) || "клик ту копи";
});

decryptCopy.addEventListener("click", function () {
  const textToCopy = decryptCopy.textContent;
  navigator.clipboard.writeText(textToCopy);
});

encryptCopy.addEventListener("click", function () {
  const textToCopy = encryptCopy.textContent;
  navigator.clipboard.writeText(textToCopy);
});
