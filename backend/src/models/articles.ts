import { Schema, model } from "mongoose";

interface IArticle {
  title: string;
  article: string;
  author: string;
}

const ArticleSchema = new Schema<IArticle>({
  title: { type: Schema.Types.String, required: true },
  article: { type: Schema.Types.String, required: true },
  author: { type: Schema.Types.String, required: true },
});

export const ArticleModel = model("article", ArticleSchema);
