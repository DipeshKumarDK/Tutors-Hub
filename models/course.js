import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        ownerid: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true
        },
        learning: {
            type: Array,
            required: true,
        },
        requirements: {
            type: Array,
            required: true,
        },
        section_title: {
            type: Array,
            required: true,
        },
        section_video: {
            type: Array,
            required: true,
        },
        section_desc: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        level: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        promotional_video: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        }
    }
)

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema)

export default Course;