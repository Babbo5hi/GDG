import { model, Schema } from "mongoose";

interface IEvent {
  title: string;
  article: string;
  image?: string;
}

const EventSchema = new Schema<IEvent>(
  {
    title: { type: Schema.Types.String, required: true, unique: true },
    article: { type: Schema.Types.String, required: true },
    image: { type: Schema.Types.String },
  },
  { timestamps: true },
);

export const EventModel = model("event", EventSchema);
