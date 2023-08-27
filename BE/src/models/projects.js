
import mongoose from "mongoose";
const ProjectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    linkGit: {
        type: String,
        require: true
    },
    time: {
        type: String,
        required: true,
    },
    create_at: {
        type: String,
        required: true
    }
});

ProjectsSchema.index({ name: "text" }, { unique: true });

const Projects = mongoose.model("Projects", ProjectsSchema);

export default Projects;