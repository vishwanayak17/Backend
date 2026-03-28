const Academy = require("../models/academymodels");

// ======================================
// 1️⃣ GET ALL ACADEMIES (FILTER + SEARCH + PAGINATION)
// ======================================
exports.getAllAcademies = async (req, res) => {
  try {
    const { city, sports, search, page = 1, limit = 10 } = req.query;

    let query = {
      status: "approved" // only approved visible to users
    };

    // ✅ city filter
    if (city) {
      query.city = city;
    }

    // ✅ sports filter
    if (sports) {
      query.sports = sports;
    }

    // ✅ search by academy name
    if (search) {
      query.academyName = { $regex: search, $options: "i" };
    }

    // ✅ pagination logic
    const skip = (page - 1) * limit;

    const academies = await Academy.find(query)
      .skip(skip)
      .limit(Number(limit));

    const total = await Academy.countDocuments(query);

    res.status(200).json({
      success: true,
      count: academies.length,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      data: academies
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ======================================
// 2️⃣ GET SINGLE ACADEMY
// ======================================
exports.getAcademyById = async (req, res) => {
  try {
    const academy = await Academy.findById(req.params.id);

    if (!academy) {
      return res.status(404).json({
        success: false,
        message: "Academy not found"
      });
    }

    res.status(200).json({
      success: true,
      data: academy
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ======================================
// 3️⃣ CREATE NEW ACADEMY
// ======================================
exports.createAcademy = async (req, res) => {
  try {
    const academy = await Academy.create(req.body);

    res.status(201).json({
      success: true,
      message: "Academy registered successfully (Pending Approval)",
      data: academy
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
// ======================================
// 4️⃣ UPDATE ACADEMY
// ======================================
exports.updateAcademy = async (req, res) => {
  try {
    const academy = await Academy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!academy) {
      return res.status(404).json({
        success: false,
        message: "Academy not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Academy updated successfully",
      data: academy
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};