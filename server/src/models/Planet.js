const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const { Album } = require("./Album");
const { Diary } = require("./Diary");

/* Schema */
const PlanetSchema = mongoose.Schema(
  {
    name: { type: String },
    select: { type: Number, default: 0 },
    member: [{ type: ObjectId, ref: "User" }],
    payment: {
      status: { type: Boolean, default: 0 },
      maxNum: { type: Number, default: 0 },
    },
    category: {
      Album: { type: Array, default: ["2022"] },
      Diary: { type: Array, default: ["2022"] },
    },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

/* method */
// Planet.findOne()
//     .then(r => {
//         if (!r) return Planet.create({})
//         return Promise.resolve(null)
//     })
//     .then(r => {
//         if (r) console.log(`${r.title} Planet is created`)
//     })
//     .catch(e => console.error(e.message))

PlanetSchema.pre("remove", async function (next) {
  const planet = this;
  try {
    await Album.deleteMany({ planet: planet._id });
    await Diary.deleteMany({ planet: planet._id });
    next();
  } catch (e) {
    next();
  }
});

/* static */

const Planet = mongoose.model("Planet", PlanetSchema, "Planet");

module.exports = { Planet };
