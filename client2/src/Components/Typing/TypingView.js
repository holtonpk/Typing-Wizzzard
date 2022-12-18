import React, { useEffect } from "react";

const TypingView = ({ typingWords, cursorType }) => {
  useEffect(() => {
    if (typingWords !== undefined) {
      document.getElementById("Selector0").classList.remove("hidden");
    }
  }, [cursorType]);

  if (typingWords !== undefined) {
    return (
      <div
        id="textContainer"
        className="relative flex-col items-center w-fit p-0 overflow-hidden h-fit max-h-[120px]  my-6  mx-auto "
      >
        <div
          id="textArea"
          className="relative flex flex-col justify-start mx-auto h-fit pb-[40px]"
        >
          {Object.values(typingWords).map((line, l) => {
            return (
              <div
                key={l}
                id={"Line" + l}
                className="flex flex-row w-fit h-[40px] relative text-focus-in"
              >
                <div
                  id={"Pacer" + l}
                  className="w-[4px] h-[90%] bg-c8 absolute slide pacerLine z-[80] hidden "
                ></div>
                <div
                  id={"Selector" + l}
                  className={
                    " bg-c1 absolute  smoothSlow z-[80] hidden selector " +
                    cursorType
                  }
                ></div>

                {line.map((word, i) => {
                  let word2 = [];
                  for (let i = 0; i < word.length; i++) {
                    word2.push(word[i]);
                  }
                  if (i <= line.length - 1) {
                    word2.push("&nbsp;");
                  }
                  return (
                    <div
                      key={i + word}
                      className="flex flex-row w-fit fade-in h-fit "
                    >
                      {word2.map((letter, j) => {
                        if (letter === "&nbsp;") {
                          return (
                            <div
                              key={j + word}
                              id={
                                "line" +
                                l +
                                "word" +
                                i +
                                "letter" +
                                j.toString()
                              }
                              className="mx-[1px] text-2xl  font-bold box-border border-l-[3px] border-c2 word  text-white  w-[20px]"
                            >
                              &nbsp;&nbsp;&nbsp;
                            </div>
                          );
                        }
                        return (
                          <div
                            key={j + word}
                            id={
                              "line" + l + "word" + i + "letter" + j.toString()
                            }
                            className="mx-[1px] text-2xl font-f1 box-border border-[3px] border-c2 word  text-c8  "
                          >
                            {letter}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default TypingView;
