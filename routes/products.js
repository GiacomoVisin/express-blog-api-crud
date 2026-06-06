const express = require(`express`)
const router = express.Router()
const controller = require(`../controllers/controller`)


router.get(`/`, controller.index)


router.get(`/`, controller.list)


router.get(`/:id`, controller.listID)

router.post(`/`, controller.Create)

router.put(`/:id`, controller.Update)

router.patch(`/:id`, controller.Modify)

router.delete(`/:id`, controller.Delete)

module.exports = router