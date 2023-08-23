import mongoose from "mongoose";
import mongoose_delete from 'mongoose-delete';
import AutoIncrementFactory from 'mongoose-sequence';
import slug from 'mongoose-slug-generator';

const AutoIncrement = AutoIncrementFactory(mongoose);
const { Schema } = mongoose;

mongoose.plugin(slug);

const courseSchema = new Schema({
  _id: {
    type: Number
  },
  name: {
    type: String,
    maxLength: 255
  },
  description: {
    type: String,
    maxLength: 255
  },
  videoid: {
    type: String,
    maxLength: 255
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true
  },
  image: {
    type: String,
    maxLength: 255
  }
}, {
  _id: false,
  timestamps: true
});

courseSchema.plugin(AutoIncrement);
courseSchema.plugin(mongoose_delete, { overrideMethods: true, deletedAt: true });

const Course = mongoose.model('Course', courseSchema);

export default Course;