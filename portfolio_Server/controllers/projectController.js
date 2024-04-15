const asyncHandler =require("../middlewares/asyncHandler.js");
const Project = require("../modals/projectCreate.js");

const addProject = asyncHandler(async (req, res) => {
  try {
    const { name, description, price, category, quantity, brand } = req.fields;

    // Validation
    switch (true) {
      case !name:
        return res.status(400).json({ error: "Name is required" });
      case !brand:
        return res.status(400).json({ error: "Brand is required" });
      case !description:
        return res.status(400).json({ error: "Description is required" });
      case !price:
        return res.status(400).json({ error: "Price is required" });
      // case !category:
      //   return res.status(400).json({ error: "Category is required" });
      case !quantity:
        return res.status(400).json({ error: "Quantity is required" });
    }

    const project = new Project({ ...req.fields });
    await project.save();

    // Success message
    res.status(200).json({ message: "Project added successfully", project: project });
  } catch (error) {
    console.error(error);

    // Error message
    res.status(400).json({ message: "Failed to add project", error: error.message });
  }
});


const updateProjectDetails = asyncHandler(async (req, res) => {
  try {
    const { name, description, price, category, quantity, brand } = req.fields;

    // Validation
    switch (true) {
      case !name:
        return res.json({ error: "Name is required" });
      case !brand:
        return res.json({ error: "Brand is required" });
      case !description:
        return res.json({ error: "Description is required" });
      case !price:
        return res.json({ error: "Price is required" });
      // case !category:
      //   return res.json({ error: "Category is required" });
      case !quantity:
        return res.json({ error: "Quantity is required" });
    }

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { ...req.fields },
      { new: true }
    );

    await project.save();

    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

const removeProject = asyncHandler(async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

const fetchProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});



const fetchProjectById = asyncHandler(async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      return res.json(project);
    } else {
      res.status(404);
      throw new Error("project not found");
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "project not found" });
  }
});

const fetchAllProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find({})
      .populate("category")
      .limit(12)
      .sort({ createAt: -1 });

    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const addProjectReview = asyncHandler(async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const project = await Project.findById(req.params.id);

    if (project) {
      const alreadyReviewed = project.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );

      if (alreadyReviewed) {
        res.status(400);
        throw new Error("project already reviewed");
      }

      const review = {
        name: req.user.username,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };

      project.reviews.push(review);

      project.numReviews = project.reviews.length;

      project.rating =
        project.reviews.reduce((acc, item) => item.rating + acc, 0) /
        project.reviews.length;

      await project.save();
      res.status(201).json({ message: "Review added" });
    } else {
      res.status(404);
      throw new Error("project not found");
    }
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

const fetchTopProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ rating: -1 }).limit(4);
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

const fetchNewProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find().sort({ _id: -1 }).limit(5);
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

const filterProjects = asyncHandler(async (req, res) => {
  try {
    const { checked, radio } = req.body;

    let args = {};
    if (checked.length > 0) args.category = checked;
    if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };

    const projects = await Project.find(args);
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports= {
  addProject,
  updateProjectDetails,
  removeProject,
  fetchProjects,
  fetchProjectById,
  fetchAllProjects,
  addProjectReview,
  fetchTopProjects,
  fetchNewProjects,
  filterProjects,
};
