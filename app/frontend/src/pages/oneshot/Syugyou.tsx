import React from "react";
import OneShot from "./OneShot";

const Syugyou: React.FC = () => {
    const template =
        "＃あなたの位置づけ" +
        "あなたはベテランの総務担当者です。" +
        "＃あなたの役割" +
        "社員からの質問に対して就業規程を参照して回答してください。" +
        "＃回答ルール" +
        "１．初めに結論を回答してください。" +
        "２．YesかNoを問う質問に対しては、まず、はい／いいえを答えてください。" +
        "３．説明は簡潔に最大でも120文字で答えてください。";

    return (
        <div>
            <OneShot promptTemplate={template} title={"就業規程"} />
        </div>
    );
};

export default Syugyou;
