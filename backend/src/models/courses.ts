import { Schema, model } from "mongoose";

interface IFaq {
  q: string;
  a: string;
}
interface ICourse {
  title: string;
  desc?: string;
  url: string;
  image?: string;
  faq?: IFaq[];
}

const FaqSchema = new Schema<IFaq>(
  {
    q: { type: Schema.Types.String, required: true },
    a: { type: Schema.Types.String, required: true },
  },
  { _id: false },
);

const CourseSchema = new Schema<ICourse>({
  title: { type: Schema.Types.String, required: true },
  desc: { type: Schema.Types.String },
  url: { type: Schema.Types.String, reuired: true },
  image: { type: Schema.Types.String },
  faq: [FaqSchema],
});

export const CourseModel = model("course", CourseSchema);
