const router = require('express').Router();

const notificaciones = require('../controllers/notificaciones');

router.get('/notificaciones/allNotificationsActives', notificaciones.allNotificationsActives);

router.get('/notificaciones/getDispenser', notificaciones.getDispenser);

router.get('/notificaciones/getNotifications', notificaciones.getNotifications);

router.put('/notificaciones/putNotification', notificaciones.putNotification);

module.exports =  router;

