import moongose from "mongoose";

const invitationSchema = new moongose.Schema({
  guest: String,
  url: String,
});

export const Invitation =
 moongose.models.Invitation ||moongose.model("Invitation", invitationSchema);
