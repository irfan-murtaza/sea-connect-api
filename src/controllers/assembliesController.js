
import Assembly from "../models/assembly.js";

const createAssembly =  async (req, res) => {
  const { title, description, date, type, quorumRequired } = req.body;

  if (!title || !description || !date || !type || !quorumRequired) {
    return res.status(400).json({ message: "fields are missing" });
  }

  try {
    const assembly = await Assembly.createAssembly({
      title,
      description,
      date,
      type: type.toUpperCase(),
      quorumRequired,
      status: 'planned',
      minutes: ''
    });

    res.status(201).json({ message: "Assembly created successfully", success: true, data: assembly });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


const getAllAssemblies =  async (req, res) => {

  const user = req.user

  try {
    const assemblies = await Assembly.getAllAssemblies(user)
    res.status(200).json({ message: "Assemblies retrieved successfully", success: true, data: assemblies });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving Assemblies", success: false, error: err.message });
  }
}


export { createAssembly, getAllAssemblies };
