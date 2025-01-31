const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.createEvent = async (req, res) => {
  try {
    const { camera_id, amount } = req.body;
    const result = await prisma.event.create({
      data: {
        camera_id: camera_id, 
        amount: amount, 
      },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: " Failed to create event", details: error });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      include: { camera: true }, 
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: " Failed to fetch events", details: error });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await prisma.event.findUnique({
      where: { id: id },
      include: { camera: true },
    });
    if (!event) return res.status(404).json({ error: " Event not found" });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: " Failed to fetch event", details: error });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;
    const result = await prisma.event.update({
      where: { id: id },
      data: { amount: amount },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: " Failed to update event", details: error });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await prisma.event.delete({
      where: { id: id },
    });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: " Failed to delete event", details: error });
  }
};
