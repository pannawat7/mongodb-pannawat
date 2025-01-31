use("sns"); // เปลี่ยนเป็นชื่อ database ที่ใช้งาน

db.cameras.insertMany([
  {
    _id: ObjectId("650e56789abcdef012345678901"),
    ip_address: "192.168.1.101",
    name: "Camera A",
    location: "Machine 1",
  },
  {
    _id: ObjectId("650e56789abcdef012345678902"),
    ip_address: "192.168.1.102",
    name: "Camera B",
    location: "Machine 2",
  },
  {
    _id: ObjectId("650e56789abcdef012345678903"),
    ip_address: "192.168.1.103",
    name: "Camera C",
    location: "Machine 3",
  },
  {
    _id: ObjectId("650e56789abcdef012345678904"),
    ip_address: "192.168.1.104",
    name: "Camera D",
    location: "Machine 4",
  },
  {
    _id: ObjectId("650e56789abcdef012345678905"),
    ip_address: "192.168.1.105",
    name: "Camera E",
    location: "Machine 5",
  },
  {
    _id: ObjectId("650e56789abcdef012345678906"),
    ip_address: "192.168.1.106",
    name: "Camera F",
    location: "Machine 6",
  },
]);

