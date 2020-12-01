import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import OurTeamPagePreview from './preview-templates/OurTeamPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import HoldingPagePreview from './preview-templates/HoldingPagePreview'
import UnderstadingCannabisPagePreview from './preview-templates/UnderstadingCannabisPagePreview'
import DocsPlaceInternationalPagePreview from './preview-templates/DocsPlaceInternationalPagePreview'
import MedicallySupervisedTrialsPagePreview from './preview-templates/MedicallySupervisedTrialsPagePreview'
import ArtificialIntelligencePagePreview from './preview-templates/ArtificialIntelligencePagePreview'
import TrademarkedProductsPagePreview from './preview-templates/TrademarkedProductsPagePreview'
import ThreeDPagePreview from './preview-templates/ThreeDPagePreview'
import CultivationPagePreview from './preview-templates/CultivationPagePreview'
import ApollonLicencesPagePreview from './preview-templates/ApollonLicencesPagePreview'
import JamaicanRegulatoryEnvironmentPagePreview from './preview-templates/ApollonLicencesPagePreview'
import InvestorRelationsPagePreview from './preview-templates/InvestorRelationsPagePreview'
import ShareHolderPagePreview from './preview-templates/ShareHolderPagePreview'
import PresentationAndReportsPagePreview from './preview-templates/PresentationAndReportsPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('holding', HoldingPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('our-team', OurTeamPagePreview)
CMS.registerPreviewTemplate('understanding-cannabis', UnderstadingCannabisPagePreview)
CMS.registerPreviewTemplate('docs-place-international', DocsPlaceInternationalPagePreview)
CMS.registerPreviewTemplate('medically-supervised-trials', MedicallySupervisedTrialsPagePreview)
CMS.registerPreviewTemplate('artificial-intelligence', ArtificialIntelligencePagePreview)
CMS.registerPreviewTemplate('trademarked-products', TrademarkedProductsPagePreview)
CMS.registerPreviewTemplate('3d-printer', ThreeDPagePreview)
CMS.registerPreviewTemplate('cultivation-processing-and-extraction', CultivationPagePreview)
CMS.registerPreviewTemplate('apollon-licences', ApollonLicencesPagePreview)
CMS.registerPreviewTemplate('jamaican-regulatory-environment', JamaicanRegulatoryEnvironmentPagePreview)
CMS.registerPreviewTemplate('uk-regulation', JamaicanRegulatoryEnvironmentPagePreview)
CMS.registerPreviewTemplate('global-regulation', JamaicanRegulatoryEnvironmentPagePreview)
CMS.registerPreviewTemplate('investor-relations', InvestorRelationsPagePreview)
CMS.registerPreviewTemplate('shareholder-information', ShareHolderPagePreview)
CMS.registerPreviewTemplate('presentations-and-reports', PresentationAndReportsPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
