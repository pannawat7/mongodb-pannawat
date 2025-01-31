const express = require('express');
const router = express.Router(); // เปลี่ยนจาก app เป็น router
const eventController = require('../controllers/event.controller'); // เปลี่ยนจาก post เป็น event

router.post('/', eventController.createEvent);
router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
