
// ================= CLIENT APPLICATION STATE CONTEXT MANAGEMENT MATRIX =================
let activeWorkspaceViewState = 'portal';     // Active Frame flags: 'portal' | 'dashboard'
let activeAuthenticatedUserProfile = null;   // Active runtime profile data object node
let targetedChosenProfileBlueprint = null;   // Active selected configuration substrate item
const BASE_RETAIL_PRICE_TARIFF_RATE = 150;
const UPI_PAYEE_ADDRESS = 'natnex@upi';
const UPI_PAYEE_NAME = 'NatNex Smart Cards';
const UPI_TRANSACTION_NOTE = 'Smar profile order payment';
const UPI_CURRENCY = 'INR';
const WHATSAPP_PHONE = '919142543191';
let currentSelectedInvoiceAmount = 0;

// Simple hash function for password hashing
function simpleHash(str) {
    let hash = 0;
    if (str.length === 0) return hash.toString();
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
}

// Simulated Distributed JSON Memory Stack Arrayacting as Client Vault Repository
let clientDatabaseMockRegistryCollection = [
    { name: "Abhinibesh Gupta", phone: "+919142543191", email: "abhi@natnex.tech", passwordHash: simpleHash("123"), historicallyCompletedOrdersCount: 0, profileRegistryLedgerArray: [] }
];

// Entry initialization baseline context execution mapping on frame load hooks
function initializeApplicationRuntimeLifecycle() {
    loadUserDatabaseFromLocalStorage();
    // Ensure demo user exists in database
    const demoUserExists = clientDatabaseMockRegistryCollection.some(u => u.name === 'Abhinibesh Gupta');
    if (!demoUserExists) {
        clientDatabaseMockRegistryCollection.push({ name: "Abhinibesh Gupta", phone: "+919142543191", email: "abhi@natnex.tech", passwordHash: simpleHash("123"), historicallyCompletedOrdersCount: 0, profileRegistryLedgerArray: [] });
        saveUserDatabaseToLocalStorage();
    }
    refreshAuthenticationStateHeaderView();
    navigateToWorkspaceView('portal');
}

// Global Workspace Client-Side Router Router Controller Simulations Engines
function navigateToWorkspaceView(targetViewFrameStringId) {
    activeWorkspaceViewState = targetViewFrameStringId;
    
    // Toggle active markers configurations boundaries classes triggers
    document.querySelectorAll('.application-view-frame').forEach(frame => frame.classList.remove('active-frame'));
    document.querySelectorAll('.nav-anchor').forEach(anchor => anchor.classList.remove('active-anchor'));
    
    const matchedViewFrameDomElement = document.getElementById(`workspace-view-dashboard`);
    const portalViewFrameDomElement = document.getElementById(`workspace-view-portal`);
    const targetedViewFrameDomNode = document.getElementById(`workspace-view-${targetViewFrameStringId}`);
    
    if (targetedViewFrameDomNode) {
        targetedViewFrameDomNode.classList.add('active-frame');
    }

    // Handle Navbar Anchors State Tracking indicators
    if (targetViewFrameStringId === 'portal') {
        document.getElementById('lnk-portal').classList.add('active-anchor');
        document.querySelectorAll('.structural-page-link').forEach(el => el.style.display = 'inline-block');
    } else if (targetViewFrameStringId === 'dashboard') {
        const dashboardAnchorDomLink = document.getElementById('lnk-dashboard');
        if (dashboardAnchorDomLink) dashboardAnchorDomLink.classList.add('active-anchor');
        document.querySelectorAll('.structural-page-link').forEach(el => el.style.display = 'none');
        executeDashboardDataRendersPipelines();
    }
}

// Intention Segment Tab Toggles Switch (Individual Suite versus Corporate Scale deployments)
function switchActiveServiceSegment(targetSegmentKeyString) {
    document.querySelectorAll('.segment-tab-trigger').forEach(trigger => trigger.classList.remove('active-trigger'));
    document.querySelectorAll('.service-segment-panel').forEach(panel => panel.classList.remove('active-panel'));
    
    // Fallbacks definitions elements mappings keys variables parameters controls loops sets
    event.target.classList.add('active-trigger');
    
    if (targetSegmentKeyString === 'individual') {
        document.getElementById('panel-segment-individual').classList.add('active-panel');
        if (targetedChosenProfileBlueprint !== null) {
            document.getElementById('footer-action-proceed-bar-prompt').classList.remove('hidden');
        }
    } else {
        document.getElementById('panel-segment-commercial').classList.add('active-panel');
        document.getElementById('footer-action-proceed-bar-prompt').classList.add('hidden');
    }
}

// ================= MODAL DIALOG INTERACTIVE LAYER AUTHENTICATION SUB-SYSTEMS =================
let currentActiveAuthModalWindowContextMode = 'login'; 

function toggleAuthModalWindowDisplayState(shouldRenderModalFrame, specificTargetContextMode = 'login') {
    const targetModalWindowDomNode = document.getElementById('modal-screen-auth-backdrop');
    if (shouldRenderModalFrame) {
        targetModalWindowDomNode.classList.remove('hidden');
        switchActiveAuthFormContextMode(specificTargetContextMode);
    } else {
        targetModalWindowDomNode.classList.add('hidden');
        document.getElementById('banner-auth-error-feedback-logs').classList.add('hidden');
    }
}

function switchActiveAuthFormContextMode(targetContextFormModeKey) {
    currentActiveAuthModalWindowContextMode = targetContextFormModeKey;
    document.getElementById('banner-auth-error-feedback-logs').classList.add('hidden');
    
    const tabLoginDomBtn = document.getElementById('btn-auth-tab-login');
    const tabRegisterDomBtn = document.getElementById('btn-auth-tab-register');
    const inputFullNameContainerBlockNode = document.getElementById('container-field-auth-fullname');
    const inputPhoneContainerBlockNode = document.getElementById('container-field-auth-phone');
    const runtimeActionExecutionTriggerBtn = document.getElementById('btn-trigger-auth-execution-engine');

    if (targetContextFormModeKey === 'login') {
        tabLoginDomBtn.classList.add('active-tab-btn');
        tabRegisterDomBtn.classList.remove('active-tab-btn');
        inputFullNameContainerBlockNode.classList.add('hidden');
        inputPhoneContainerBlockNode.classList.add('hidden');
        runtimeActionExecutionTriggerBtn.innerText = "Authorize Core Session Token";
    } else {
        tabLoginDomBtn.classList.remove('active-tab-btn');
        tabRegisterDomBtn.classList.add('active-tab-btn');
        inputFullNameContainerBlockNode.classList.remove('hidden');
        inputPhoneContainerBlockNode.classList.remove('hidden');
        runtimeActionExecutionTriggerBtn.innerText = "Provision Distributed Account Node";
    }
}

function processClientAuthFormSubmission() {
    const stringCapturedEmail = document.getElementById('field-auth-email').value.trim();
    const stringCapturedPassword = document.getElementById('field-auth-password').value;
    const stringCapturedPhone = document.getElementById('field-auth-phone').value.trim();
    const stringCapturedFullName = document.getElementById('field-auth-fullname').value.trim();
    const domAlertErrorBannerLoggingZone = document.getElementById('banner-auth-error-feedback-logs');

    if (!stringCapturedEmail || !stringCapturedPassword) {
        domAlertErrorBannerLoggingZone.innerText = "Security Halt: Crucial verification index vectors blank.";
        domAlertErrorBannerLoggingZone.classList.remove('hidden');
        return;
    }

    if (currentActiveAuthModalWindowContextMode === 'login') {
        const passwordHash = simpleHash(stringCapturedPassword);
        const foundProfileMatchInstance = clientDatabaseMockRegistryCollection.find(profile => profile.email.toLowerCase() === stringCapturedEmail.toLowerCase() && profile.passwordHash === passwordHash);
        if (foundProfileMatchInstance) {
            activeAuthenticatedUserProfile = foundProfileMatchInstance;
            toggleAuthModalWindowDisplayState(false);
            refreshAuthenticationStateHeaderView();
            executePricingMatrixCalculationsEngine(); 
            alert(`Handshake Complete! Authentication session token securely locked onto node: ${activeAuthenticatedUserProfile.name}`);
        } else {
            domAlertErrorBannerLoggingZone.innerText = "Handshake Rejection: Invalid Credentials Signature Tokens Match Failure.";
            domAlertErrorBannerLoggingZone.classList.remove('hidden');
        }
    } else {
        if (!stringCapturedFullName || !stringCapturedPhone) {
            domAlertErrorBannerLoggingZone.innerText = "Validation Halt: Full Name and Phone number are required.";
            domAlertErrorBannerLoggingZone.classList.remove('hidden');
            return;
        }

        const booleanDuplicateEmailFlagChecker = clientDatabaseMockRegistryCollection.some(profile => profile.email.toLowerCase() === stringCapturedEmail.toLowerCase());
        if (booleanDuplicateEmailFlagChecker) {
            domAlertErrorBannerLoggingZone.innerText = "Collision Alert: Linked profile registry exists with corresponding email.";
            domAlertErrorBannerLoggingZone.classList.remove('hidden');
            return;
        }

        const passwordHash = simpleHash(stringCapturedPassword);
        let compiledNewUserProfileObjectNode = {
            name: stringCapturedFullName,
            phone: stringCapturedPhone,
            email: stringCapturedEmail,
            passwordHash: passwordHash,
            historicallyCompletedOrdersCount: 0,
            profileRegistryLedgerArray: []
        };

        clientDatabaseMockRegistryCollection.push(compiledNewUserProfileObjectNode);
        saveUserDatabaseToLocalStorage();
        activeAuthenticatedUserProfile = compiledNewUserProfileObjectNode;
        toggleAuthModalWindowDisplayState(false);
        refreshAuthenticationStateHeaderView();
        executePricingMatrixCalculationsEngine();
        alert("Provisioning Matrix Complete. Dedicated user profile environment variables successfully loaded.");
    }
}

function triggerSessionUnmountLogoutCommand() {
    activeAuthenticatedUserProfile = null;
    refreshAuthenticationStateHeaderView();
    navigateToWorkspaceView('portal');
    executePricingMatrixCalculationsEngine();
    alert("Session data arrays safely garbage collected. Context variables reverted back to standard guest profile parameters.");
}

function refreshAuthenticationStateHeaderView() {
    const domMountHeaderWrapperZoneBox = document.getElementById('auth-header-state-mount');
    const domSessionProtectedDashboardNavLink = document.getElementById('lnk-dashboard');

    if (activeAuthenticatedUserProfile !== null) {
        domMountHeaderWrapperZoneBox.innerHTML = `
            <div class="user-profile-session-badge-node">
                <i class="fa-solid fa-user-check g-blue-text"></i>
                <span>${activeAuthenticatedUserProfile.name}</span>
                <button class="btn-session-logout-directive-link" onclick="triggerSessionUnmountLogoutCommand()" title="Terminate Active Session Connection Context"><i class="fa-solid fa-power-off"></i></button>
            </div>
        `;
        if (domSessionProtectedDashboardNavLink) domSessionProtectedDashboardNavLink.classList.remove('hidden');
    } else {
        domMountHeaderWrapperZoneBox.innerHTML = `
            <button class="btn-header-login-trigger-action" onclick="toggleAuthModalWindowDisplayState(true, 'login')"><i class="fa-solid fa-circle-user"></i> Sign In / Register</button>
        `;
        if (domSessionProtectedDashboardNavLink) domSessionProtectedDashboardNavLink.classList.add('hidden');
    }
}

// Mobile navigation toggle for small screens
function toggleMobileNav() {
    const mobileNav = document.getElementById('mobile-nav');
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    if (!mobileNav || !toggleBtn) return;
    const isHidden = mobileNav.classList.contains('hidden');
    if (isHidden) {
        mobileNav.classList.remove('hidden');
        mobileNav.classList.add('open');
        toggleBtn.setAttribute('aria-expanded', 'true');
    } else {
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
    }
}

// Ensure mobile nav closes when resizing to desktop widths
window.addEventListener('resize', () => {
    const mobileNav = document.getElementById('mobile-nav');
    if (!mobileNav) return;
    if (window.innerWidth > 900) {
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('open');
    }
});

// ================= VISUAL BLUEPRINTS CAPTURE AND SUBSTRATE MANAGEMENT SELECTION LAYER =================
function selectProfileTemplateBlueprint(numericalBlueprintId, stringBlueprintNameTitle) {
    targetedChosenProfileBlueprint = { id: numericalBlueprintId, name: stringBlueprintNameTitle };

    // Update conditional graphics classes visual borders indicators components cards maps layout grids
    document.querySelectorAll('.blueprint-box').forEach(box => box.classList.remove('selected-active-blueprint'));
    const newlySelectedCardDomNodeElement = document.getElementById(`card-blueprint-${numericalBlueprintId}`);
    if (newlySelectedCardDomNodeElement) {
        newlySelectedCardDomNodeElement.classList.add('selected-active-blueprint');
    }

    // Mount Config Label variables text string values mappings inputs fields controls labels definitions
    document.getElementById('lbl-active-configured-blueprint-title').innerText = `${stringBlueprintNameTitle} (Variant substrate node reference #${numericalBlueprintId})`;
    const domTargetCustomizationFormSectionBlock = document.getElementById('card-customization-form-section');
    domTargetCustomizationFormSectionBlock.classList.remove('hidden');

    // Make floating prompt execution horizontal bar trace active layout space bounds zones structures
    document.getElementById('footer-action-proceed-bar-prompt').classList.remove('hidden');

    domTargetCustomizationFormSectionBlock.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    executePricingMatrixCalculationsEngine();
}

function evaluateHardwareInfrastructureRequirements(domSelectTagReference) {
    if (domSelectTagReference.value === 'nfc-wireless') {
        domSelectTagReference.classList.add('nfc-disabled-state-input-style');
        alert("Hardware Constraint Matrix Failure: Integrated NFC Silicon Modules are restricted pending localized infrastructure deployment validation bounds. Overriding back to high-density dynamic QR layers.");
        domSelectTagReference.value = 'qr-static';
        domSelectTagReference.classList.remove('nfc-disabled-state-input-style');
    }
}

function toggleConditionalMetadataFields(dropdownSelectedOptionValueText) {
    const domTargetSubFormBlockPanelCoordinates = document.getElementById('sub-form-conditional-contact-coordinates');
    if (dropdownSelectedOptionValueText === 'enable') {
        domTargetSubFormBlockPanelCoordinates.classList.remove('hidden');
    } else {
        domTargetSubFormBlockPanelCoordinates.classList.add('hidden');
    }
}

function toggleInstitutionalInfoFields(dropdownSelectedOptionValueText) {
    const domInstitutionalInfoPanel = document.getElementById('sub-form-conditional-institutional-info');
    if (dropdownSelectedOptionValueText === 'enable') {
        domInstitutionalInfoPanel.classList.remove('hidden');
    } else {
        domInstitutionalInfoPanel.classList.add('hidden');
    }
}

function toggleConditionalSkillsFields(dropdownSelectedOptionValueText) {
    const domSkillsPanel = document.getElementById('sub-form-conditional-skills');
    if (dropdownSelectedOptionValueText === 'enable') {
        domSkillsPanel.classList.remove('hidden');
    } else {
        domSkillsPanel.classList.add('hidden');
    }
}

function toggleConditionalProjectsFields(dropdownSelectedOptionValueText) {
    const domProjectsPanel = document.getElementById('sub-form-conditional-projects');
    if (dropdownSelectedOptionValueText === 'enable') {
        domProjectsPanel.classList.remove('hidden');
    } else {
        domProjectsPanel.classList.add('hidden');
    }
}

// ================= EXCLUSIVE INVOICE DRAWER CHECKS AND HIGH LEVEL UPI GATEWAY CALCULATION CORE =================
function toggleCheckoutDrawerCanvasDisplayState(shouldOpenSlidingDrawerWindowComponent) {
    const domSlidingDrawerBoxContainerWindow = document.getElementById('checkout-sidebar-canvas-drawer');
    const domLayoutUnderlyingBackdropVeilCurtain = document.getElementById('backdrop-veil-checkout-drawer-curtain');

    if (shouldOpenSlidingDrawerWindowComponent) {
        executePricingMatrixCalculationsEngine();
        domSlidingDrawerBoxContainerWindow.classList.add('drawer-open-active-state');
        domLayoutUnderlyingBackdropVeilCurtain.style.display = 'block';
    } else {
        domSlidingDrawerBoxContainerWindow.classList.remove('drawer-open-active-state');
        domLayoutUnderlyingBackdropVeilCurtain.style.display = 'none';
        
        const prefillTerminal = document.getElementById('box-upi-intent-prefilled-typing-terminal-view');
        if (prefillTerminal) prefillTerminal.classList.add('hidden');
        hidePaymentGatewayPanels();
    }
}

function executePricingMatrixCalculationsEngine() {
    if (targetedChosenProfileBlueprint === null) return;

    const domSourceQuantityInputNumberNode = document.getElementById('field-drawer-quantity-counter');
    let numericalTargetUnitsVolumeQuantityCount = parseInt(domSourceQuantityInputNumberNode.value) || 1;

    if (numericalTargetUnitsVolumeQuantityCount < 1) { 
        numericalTargetUnitsVolumeQuantityCount = 1; 
        domSourceQuantityInputNumberNode.value = 1; 
    }

    let evaluatedInvoiceOutstandingFinancialCostValue = 0;
    
    const domSummaryBlueprintNameLabelTarget = document.getElementById('lbl-summary-blueprint-name-target');
    const domSummaryPricingTierBadgeLabelTarget = document.getElementById('lbl-summary-pricing-tier-badge-target');
    const domSummaryInvoiceGrandTotalValueTextTarget = document.getElementById('lbl-summary-invoice-grand-total-value-target');
    
    const domDrawerGuestVerificationWarningBannerCard = document.getElementById('banner-drawer-guest-verification-warning');
    const domNativeUpiGatewayHubMainWrapperBoxSection = document.getElementById('container-native-upi-gateway-hub');
    const domDrawerCheckoutActionsInjectMountZoneTarget = document.getElementById('container-drawer-checkout-actions-mount-zone');

    domSummaryBlueprintNameLabelTarget.innerText = targetedChosenProfileBlueprint.name;

    // Check account order log historical dimensions to evaluate promotional qualification bounds
    let evaluateIsEligibleForAbsoluteFirstPurchaseFreePromo = false;
    
    if (activeAuthenticatedUserProfile !== null) {
        domDrawerGuestVerificationWarningBannerCard.classList.add('hidden');
        if (activeAuthenticatedUserProfile.historicallyCompletedOrdersCount === 0) {
            evaluateIsEligibleForAbsoluteFirstPurchaseFreePromo = true;
        }
    } else {
        domDrawerGuestVerificationWarningBannerCard.classList.remove('hidden');
        evaluateIsEligibleForAbsoluteFirstPurchaseFreePromo = true; // Preview logic mapping potential rules triggers logs
    }

    if (evaluateIsEligibleForAbsoluteFirstPurchaseFreePromo) {
        domSummaryPricingTierBadgeLabelTarget.innerText = "Commercial Launch Bonus: 1st Order Absolute ₹0 Cost Structure Locked";
        domSummaryPricingTierBadgeLabelTarget.className = "promo-badge-pill-ui";
        domSummaryPricingTierBadgeLabelTarget.style.backgroundColor = "rgba(52, 168, 83, 0.12)";
        domSummaryPricingTierBadgeLabelTarget.style.color = "var(--g-color-green)";

        // Irrespective of volume, the total invoice for the first completed ledger event is systematically overridden to 0
        evaluatedInvoiceOutstandingFinancialCostValue = 0;
        domNativeUpiGatewayHubMainWrapperBoxSection.classList.add('hidden');
        
        domDrawerCheckoutActionsInjectMountZoneTarget.innerHTML = `
            <button class="btn-drawer-payment-execution-submit-gate free-promo-variant" ${activeAuthenticatedUserProfile === null ? 'disabled style="background-color:#bbb; cursor:not-allowed;"' : ''} onclick="commitProfileOrderTransactionDispatchPipeline(true, 0)">Confirm Zero-Fee First Allocation</button>
        `;
    } else {
        // Enforce standard commercial bulk billing calculation algorithm logic maps configurations protocols sets rules
        domSummaryPricingTierBadgeLabelTarget.innerText = `Standard Commercial Rates Applied (₹${BASE_RETAIL_PRICE_TARIFF_RATE} / Profile)`;
        domSummaryPricingTierBadgeLabelTarget.className = "promo-badge-pill-ui";
        domSummaryPricingTierBadgeLabelTarget.style.backgroundColor = "rgba(66, 133, 244, 0.1)";
        domSummaryPricingTierBadgeLabelTarget.style.color = "var(--g-color-blue)";

        evaluatedInvoiceOutstandingFinancialCostValue = numericalTargetUnitsVolumeQuantityCount * BASE_RETAIL_PRICE_TARIFF_RATE;
        
        if (activeAuthenticatedUserProfile !== null) {
            domNativeUpiGatewayHubMainWrapperBoxSection.classList.remove('hidden');
            showPaymentSelectionOptions(evaluatedInvoiceOutstandingFinancialCostValue);
            domDrawerCheckoutActionsInjectMountZoneTarget.innerHTML = `<p class="drawer-payment-instruction">Choose QR or UPI payment method above to complete this order.</p>`;
        } else {
            domNativeUpiGatewayHubMainWrapperBoxSection.classList.add('hidden');
            domDrawerCheckoutActionsInjectMountZoneTarget.innerHTML = `<p class="drawer-payment-instruction">Sign in to complete paid orders.</p>`;
        }
    }

    domSummaryInvoiceGrandTotalValueTextTarget.innerText = `₹${evaluatedInvoiceOutstandingFinancialCostValue}`;
}

function triggerClickableUpiIntentHandshakeProcessingView() {
    const domTargetPrefilledTypingTerminalViewBoxNode = document.getElementById('box-upi-intent-prefilled-typing-terminal-view');
    if (domTargetPrefilledTypingTerminalViewBoxNode) domTargetPrefilledTypingTerminalViewBoxNode.classList.remove('hidden');
    
    const upiAmountField = document.getElementById('field-upi-locked-prescribed-amount-display');
    const stringPresetPrescribedAmountCapturedValue = upiAmountField ? upiAmountField.value : currentSelectedInvoiceAmount;
    alert(`UPI Handshake Handled: Prescribed amount payload string token of [₹${stringPresetPrescribedAmountCapturedValue}] securely pre-written and auto-filled inside target transmission registry fields.`);
}

function sendWhatsAppMessage() {
    if (!activeAuthenticatedUserProfile) {
        alert('Please sign in to send order details.');
        return;
    }
    const orderMessage = buildWhatsAppOrderMessage();
    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function buildWhatsAppOrderMessage() {
    const blueprint = targetedChosenProfileBlueprint ? targetedChosenProfileBlueprint.name : 'Not Selected';
    const quantity = document.getElementById('field-drawer-quantity-counter').value;
    const userName = activeAuthenticatedUserProfile.name;
    const userPhone = activeAuthenticatedUserProfile.phone;
    const userEmail = activeAuthenticatedUserProfile.email;
    const amount = currentSelectedInvoiceAmount;
    const orderId = 'SMR-' + Math.floor(200000 + Math.random() * 799999);
    
    return `Hi, I want to place an order for Smar Smart Cards.\\n\\nOrder Details:\\nOrder ID: ${orderId}\\nDesign: ${blueprint}\\nQuantity: ${quantity} Cards\\nAmount: ₹${amount}\\n\\nCustomer Info:\\nName: ${userName}\\nPhone: ${userPhone}\\nEmail: ${userEmail}`;
}

function saveUserDatabaseToLocalStorage() {
    localStorage.setItem('smardUserDatabase', JSON.stringify(clientDatabaseMockRegistryCollection));
}

function loadUserDatabaseFromLocalStorage() {
    const stored = localStorage.getItem('smardUserDatabase');
    if (stored) {
        clientDatabaseMockRegistryCollection = JSON.parse(stored);
    }
}

function showPaymentSelectionOptions(amount) {
    currentSelectedInvoiceAmount = amount;
    const domUpiFallbackLink = document.getElementById('lbl-upi-fallback-link');
    if (domUpiFallbackLink) domUpiFallbackLink.innerText = buildUpiDeepLink(amount);
    hidePaymentGatewayPanels();
}

function hidePaymentGatewayPanels() {
    const upiPanel = document.getElementById('payment-gateway-upi-panel');
    if (upiPanel) upiPanel.classList.add('hidden');
}

function triggerUpiPaymentGateway() {
    if (currentSelectedInvoiceAmount <= 0) return;
    const upiUrl = buildUpiDeepLink(currentSelectedInvoiceAmount);
    document.getElementById('lbl-upi-fallback-link').innerText = upiUrl;
    window.location.href = upiUrl;
}

function triggerUpiDeepLink() {
    if (currentSelectedInvoiceAmount <= 0) return;
    const upiUrl = buildUpiDeepLink(currentSelectedInvoiceAmount);
    window.location.href = upiUrl;
}

function buildUpiDeepLink(amount) {
    const upiParams = new URLSearchParams({
        pa: UPI_PAYEE_ADDRESS,
        pn: UPI_PAYEE_NAME,
        am: amount.toString(),
        tn: UPI_TRANSACTION_NOTE,
        cu: UPI_CURRENCY
    });
    return `upi://pay?${upiParams.toString()}`;
}

function confirmPaymentReceivedPaymentGateway() {
    if (!activeAuthenticatedUserProfile) {
        alert('Please sign in to complete payment and create the order.');
        return;
    }
    commitProfileOrderTransactionDispatchPipeline(false, currentSelectedInvoiceAmount);
}

function saveOrderToAdminQueue(orderObject) {
    const storedOrders = JSON.parse(localStorage.getItem('smardAdminOrderLedger') || '[]');
    storedOrders.unshift(orderObject);
    localStorage.setItem('smardAdminOrderLedger', JSON.stringify(storedOrders));
}

// ================= CORE TRANSACTION INJECTION & LEDGER ROUTING PROCESSING ENGINE =================
function commitProfileOrderTransactionDispatchPipeline(booleanWhollyFreeFirstPromoFlag, numericalFinalizedInvoiceAmountValueDue) {
    if (activeAuthenticatedUserProfile === null) {
        alert("Critical Failure: Session verification contexts expired or corrupted. Operation execution halted.");
        return;
    }

    const domSourceCounterVolumeInputNodeValue = document.getElementById('field-drawer-quantity-counter');
    let numericalTotalVolumeUnitsConfirmedCount = parseInt(domSourceCounterVolumeInputNodeValue.value) || 1;
    const stringPrintedMonikerCapturedName = document.getElementById('field-print-name').value.trim() || "Unspecified System Client";
    const institutionalInfoEnabled = document.getElementById('field-institutional-toggle').value === 'enable';
    const skillsEnabled = document.getElementById('field-skills-toggle').value === 'enable';
    const projectsEnabled = document.getElementById('field-projects-toggle').value === 'enable';

    const institutionalInfo = institutionalInfoEnabled ? {
        name: document.getElementById('field-institution-name').value.trim(),
        program: document.getElementById('field-institution-program').value.trim(),
        gpa: document.getElementById('field-institution-gpa').value.trim(),
        batchYear: document.getElementById('field-institution-batch').value.trim()
    } : null;

    const skillsSummary = skillsEnabled ? document.getElementById('field-skills-summary').value.trim() : '';
    const projectsSummary = projectsEnabled ? document.getElementById('field-projects-highlights').value.trim() : '';

    const residentialAddress = document.getElementById('field-residential-address') ? document.getElementById('field-residential-address').value.trim() : '';
    const residentialCity = document.getElementById('field-residential-city') ? document.getElementById('field-residential-city').value.trim() : '';
    const residentialPostal = document.getElementById('field-residential-postal') ? document.getElementById('field-residential-postal').value.trim() : '';

    // Structuring cryptographically styled unique transaction token UUID strings descriptors parameters attributes grids sets fields
    let stringGeneratedInvoiceRandomUuidToken = "SMR-" + Math.floor(200000 + Math.random() * 799999);
    let stringSystemClockCurrentTimestampMarker = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' });

    let consolidatedCompiledReceiptOrderMetadataObjectInstance = {
        orderUuid: stringGeneratedInvoiceRandomUuidToken,
        timestamp: stringSystemClockCurrentTimestampMarker,
        userName: stringPrintedMonikerCapturedName,
        userEmail: activeAuthenticatedUserProfile.email,
        blueprintModelName: targetedChosenProfileBlueprint.name,
        volumeCount: numericalTotalVolumeUnitsConfirmedCount,
        financialCost: numericalFinalizedInvoiceAmountValueDue,
        pipelineStateStatus: "Compiling Visual Blueprints Matrix",
        residentialInfo: residentialAddress || residentialCity || residentialPostal ? {
            addressLine: residentialAddress,
            cityState: residentialCity,
            postalCode: residentialPostal
        } : null,
        institutionalInfo,
        skillsSummary: skillsSummary || null,
        projectsSummary: projectsSummary || null
    };

    saveOrderToAdminQueue(consolidatedCompiledReceiptOrderMetadataObjectInstance);

    // Increment historical count markers to finalize status matrices parameters logic tracking variables pools
    activeAuthenticatedUserProfile.historicallyCompletedOrdersCount += 1;

    // Push the metadata receipt structural packet right into top index arrays trace profiles context sets structures maps paths
    activeAuthenticatedUserProfile.profileRegistryLedgerArray.unshift(consolidatedCompiledReceiptOrderMetadataObjectInstance);

    alert(`E-Commerce Success String: Transaction processing block closed out successfully under token record: ${stringGeneratedInvoiceRandomUuidToken}.`);
    
    toggleCheckoutDrawerCanvasDisplayState(false);
    // Direct routing change updates pipelines triggers to force display workspace updates immediately over active client operational logs dashboard screens
    navigateToWorkspaceView('dashboard');
}

// ================= CUSTOMER OPERATION CONSOLE DATA MATRIX LAYER RENDER ENGINE =================
function executeDashboardDataRendersPipelines() {
    if (activeAuthenticatedUserProfile === null) return;

    // Synchronize Numerical Indicators Widgets values variables indicators metrics
    document.getElementById('lbl-dashboard-welcome-user-name').innerText = activeAuthenticatedUserProfile.name;
    document.getElementById('cnt-metric-total-orders').innerText = activeAuthenticatedUserProfile.profileRegistryLedgerArray.length;

    const domMetricPromoStatusWidgetLabelTarget = document.getElementById('cnt-metric-promo-status');
    if (activeAuthenticatedUserProfile.historicallyCompletedOrdersCount > 0) {
        domMetricPromoStatusWidgetLabelTarget.innerText = "Utilized Slot";
        domMetricPromoStatusWidgetLabelTarget.className = "metric-numerical-value-text g-red-text";
    } else {
        domMetricPromoStatusWidgetLabelTarget.innerText = "1 Free Slot Open";
        domMetricPromoStatusWidgetLabelTarget.className = "metric-numerical-value-text g-green-text";
    }

    const domMetricAccountLevelTierBadgeTarget = document.getElementById('cnt-metric-account-tier');
    if (activeAuthenticatedUserProfile.profileRegistryLedgerArray.length >= 4) {
        domMetricAccountLevelTierBadgeTarget.innerText = "Elite Corporate Node";
        domMetricAccountLevelTierBadgeTarget.className = "metric-numerical-value-text g-blue-text";
    } else {
        domMetricAccountLevelTierBadgeTarget.innerText = "Standard Matrix Tier";
        domMetricAccountLevelTierBadgeTarget.className = "metric-numerical-value-text text-[#202124]";
    }

    const domMountTargetTableRowsContainerZoneNode = document.getElementById('mount-target-table-rows-ledger');
    const domPlaceholderEmptyTableStateFallbackNoticeCard = document.getElementById('placeholder-empty-table-state-notice');

    // Sweep out standard native children data records lists fragments nodes items before reconstruction
    domMountTargetTableRowsContainerZoneNode.innerHTML = "";

    if (activeAuthenticatedUserProfile.profileRegistryLedgerArray.length === 0) {
        domPlaceholderEmptyTableStateFallbackNoticeCard.classList.remove('hidden');
    } else {
        domPlaceholderEmptyTableStateFallbackNoticeCard.classList.add('hidden');
        
        activeAuthenticatedUserProfile.profileRegistryLedgerArray.forEach((ledgerItem, structuralIndexIndexCounter) => {
            let stringStatusBadgeVisualClassOverrideStyling = "status-badge-pill-ui state-pending-badge";
            if (structuralIndexIndexCounter > 0) {
                ledgerItem.pipelineStateStatus = "Dispatched via Secure Fleet Channels";
                stringStatusBadgeVisualClassOverrideStyling = "status-badge-pill-ui state-success-badge";
            }

            let stringCompiledRowHtmlMarkupSyntaxNode = `
                <tr>
                    <td style="font-family:monospace; font-weight:700; color:var(--g-color-blue);">${ledgerItem.orderUuid}</td>
                    <td>${ledgerItem.timestamp}</td>
                    <td><strong>${ledgerItem.blueprintModelName}</strong></td>
                    <td style="color:var(--google-text-secondary-muted); font-style:italic;">"${ledgerItem.monikerNameLabel}"</td>
                    <td>${ledgerItem.volumeCount} Cards Units</td>
                    <td style="font-weight:700; color:${ledgerItem.financialCost === 0 ? 'var(--g-color-green)' : 'var(--google-text-primary-dark)'};">${ledgerItem.financialCost === 0 ? '₹0 (LAUNCH BONUS)' : '₹' + ledgerItem.financialCost}</td>
                    <td><span class="${stringStatusBadgeVisualClassOverrideStyling}">${ledgerItem.pipelineStateStatus}</span></td>
                </tr>
            `;
            domMountTargetTableRowsContainerZoneNode.innerHTML += stringCompiledRowHtmlMarkupSyntaxNode;
        });
    }
}

// Attach client structural DOM components readiness check bindings triggers to activate scope environment lifecycles
window.addEventListener('DOMContentLoaded', initializeApplicationRuntimeLifecycle);