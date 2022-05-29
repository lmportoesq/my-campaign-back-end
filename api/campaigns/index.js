const { Router } = require('express');
const {
  handlerCreateCampaign,
  handlerGetAllCampaigns,
  handlerGetOneCampaign,
  handlerUpdateCampaign,
  handlerDeleteCampaign,
} = require('./campaign.controller');

const { isAuthenticated } = require('../../auth/auth.service');
const router = Router();
router.post('/',handlerCreateCampaign );

router.get('/', handlerGetAllCampaigns);
router.get('/:id', handlerGetOneCampaign);
router.patch('/:id', handlerUpdateCampaign);
router.delete('/:id', isAuthenticated(), handlerDeleteCampaign);

module.exports = router;
