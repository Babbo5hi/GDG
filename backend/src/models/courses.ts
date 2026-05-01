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

const CourseSchema = new Schema<ICourse>(
  {
    title: {
      type: Schema.Types.String,
      required: true,
      trim: true,
      unique: true,
    },
    desc: { type: Schema.Types.String },
    url: { type: Schema.Types.String, reuired: true },
    image: { type: Schema.Types.String },
    faq: { type: [FaqSchema], required: false, default: [] },
  },
  { timestamps: true },
);

export const CourseModel = model("course", CourseSchema);
