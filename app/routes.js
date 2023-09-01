//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/hs-codes-known-answer', function(request, response) {

    var knowHsCodes = request.session.data['do-you-know-the-hs-codes']
    if (knowHsCodes == "yes"){
        response.redirect("report-a-barrier/mve-updates/section-7v2-hscodes")
    } else {
        response.redirect("report-a-barrier/mve-updates/section-7v2-no-code-route")
    }
})
