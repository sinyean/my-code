const data = {
    "consultant": [
        {
            "code": "SD3CY00413",
            "name": "CONSUL VMAT PROF FEE",
            "price": 4575
        },
        {
            "code": "SD2AQ03557",
            "name": "CONSUL VMAT PROF FEE *DISCOUNTED (D)",
            "price": 4000
        },
        {
            "code": "SD2AQ03558",
            "name": "CONSUL VMAT PROF FEE *DISCOUNTED (E)",
            "price": 3200
        },
        {
            "code": "SFEAJ00143",
            "name": "SRS/SRT ONCOLOGIST FEE",
            "price": 4575
        },
        {
            "code": "SD3CY00253",
            "name": "CONSUL 3D CONFORMAL F FEE",
            "price": 3800
        },
        {
            "code": "SD2AQ00427",
            "name": "CONSUL 3D CONFORMAL F FEE *DISCOUNTED (D)",
            "price": 3300
        },
        {
            "code": "SD2AQ00428",
            "name": "CONSUL 3D CONFORMAL F FEE *DISCOUNTED (E)",
            "price": 2500
        },
        {
            "code": "SD3CY00252",
            "name": "CONSUL 3D REPLAN F FEE",
            "price": 570
        },
        {
            "code": "SD2AQ00425",
            "name": "CONSUL 3D REPLAN F FEE *DISCOUNTED (D)",
            "price": 510
        },
        {
            "code": "SD2AQ00426",
            "name": "CONSUL 3D REPLAN F FEE *DISCOUNTED (E)",
            "price": 410
        }
    ],
    "planning1": [
        {
            "code": "SONHY00169",
            "name": "CT PLANNING SIMULATION",
            "price": 415.2
        },
        {
            "code": "SDSEQ00021",
            "name": "CT SCAN INJECTOR USAGE SURCHARGE",
            "price": 217.1
        },
        {
            "code": "SPSLD00073",
            "name": "IOPAMIRO 370MG/ML INJ (IOPAMIDOL) 100ML B OP",
            "price": 241
        },
        {
            "code": "SONHY00247",
            "name": "4D CT FREE BREATHING",
            "price": 300
        },
        {
            "code": "NMSGM00265",
            "name": "KLARITY HEADSTEP HEAD MASK",
            "price": 401
        },
        {
            "code": "NMSGM00264",
            "name": "KLARITY HEADSTEP HEAD AND SHOULDER",
            "price": 949.5
        },
        {
            "code": "SONMM00004",
            "name": "IMMOBILIZATION FEE",
            "price": 210
        }
    ],
    "planning2": [
        {
            "code": "SONHY00157",
            "name": "IMRT/VMAT PLANNING FEE",
            "price": 2575
        },
        {
            "code": "SONHY00158",
            "name": "IMRT/VMAT REPLAN FEE",
            "price": 1287.5
        },
        {
            "code": "SONHY00250",
            "name": "SBRT COMPUTER PLANNING",
            "price": 6150
        },
        {
            "code": "SONHY00270",
            "name": "SBRT COMPUTER PLANNING 2ND ISO (SAME AREA) VERSA HD",
            "price": 4910
        },
        {
            "code": "SONHY00130",
            "name": "3D CONFORMAL PLANNING FEE",
            "price": 1030
        },
        {
            "code": "SONHY00164",
            "name": "3D REPLAN FEE",
            "price": 420
        },
        {
            "code": "SEQFL00004",
            "name": "IMRT/VMAT QA",
            "price": 1591.6
        },
        {
            "code": "SONHY00251",
            "name": "SBRT QA",
            "price": 1050
        },
        {
            "code": "SEQFL00001",
            "name": "3D CONFORMAL QA",
            "price": 324.5
        }
    ],
    "treatment": [
        {
            "code": "SONHY00139",
            "name": "IMAGE VERIFICATION (RADICAL)",
            "price": 3090
        },
        {
            "code": "SONHY00138",
            "name": "IMAGE VERIFICATION (PALLIATIVE)",
            "price": 1030
        },
        {
            "code": "SONHZ00136",
            "name": "4D CT RESPIRATORY GATING",
            "price": 2040
        },
        {
            "code": "SONHY00159",
            "name": "IMRT/VMAT SINGLE FRACTION",
            "price": 420
        },
        {
            "code": "SONHY00154",
            "name": "IMRT/VMAT - 15 FRACTIONS",
            "price": 5757
        },
        {
            "code": "SONHY00160",
            "name": "IMRT/VMAT - 20 FRACTIONS",
            "price": 7676
        },
        {
            "code": "SONHY00155",
            "name": "IMRT/VMAT - 25 FRACTIONS",
            "price": 9500
        },
        {
            "code": "SONHY00161",
            "name": "IMRT/VMAT - 30 FRACTIONS",
            "price": 11400
        },
        {
            "code": "SONHY00156",
            "name": "IMRT/VMAT - 35 FRACTIONS",
            "price": 13300
        },
        {
            "code": "SONHY00184",
            "name": "SBRT TREATMENT",
            "price": 685
        },
        {
            "code": "SONHY00131",
            "name": "3D CONFORMAL SINGLE FRACTION",
            "price": 283.5
        },
        {
            "code": "SONHY00128",
            "name": "3D CONFORMAL - 5 FRACTION",
            "price": 1321
        },
        {
            "code": "SONHY00132",
            "name": "3D CONFORMAL - 10 FRACTION",
            "price": 2642
        },
        {
            "code": "SONHY00129",
            "name": "3D CONFORMAL - 15 FRACTION",
            "price": 3886
        },
        {
            "code": "SONHY00135",
            "name": "3D CONFORMAL - 20 FRACTION",
            "price": 5181.5
        },
        {
            "code": "SONHY00133",
            "name": "3D CONFORMAL - 25 FRACTION",
            "price": 6476.6
        },
        {
            "code": "SONHY00136",
            "name": "3D CONFORMAL - 30 FRACTION",
            "price": 7772
        },
        {
            "code": "SONHY00134",
            "name": "3D CONFORMAL - 35 FRACTION",
            "price": 8977.5
        }
    ]
};

var printableHtml = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Radiation Therapy Services - Printable Version</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 3mm;
            
        }

        .terms {
            font-size: 11px;
            font-family: Arial, san-serif;
        }

        .order-summary {
            padding: 5px;
            background-color: #f9f9f9;
            
            font-size: 12px;
            font-family: Arial, sans-serif;
        }

        .order-item {
            display: flex;
            justify-content: space-between;
            padding: 3px 0;
            
        }

        .order-total {
            font-weight: bold;
            font-size: 14px;
            border-top: 1px solid #2c3e50;
            padding-top: 8px;
            margin-top: 6px;
            display: flex;
            justify-content: space-between;
        }

        .order-total-amount::before {
            content: "RM ";
        }

        .print-header {
            text-align: center;

            img {
                max-width: 95vw;
                width: 100%;
                max-height: 90%;
                margin-top: 0mm;
                margin-bottom: 0mm;
            
            }
        }
    </style>
</head>

<body>
    <div class="printable-container">
        <!-- hospital logo-->
        <div class="print-header">
            <img src="images/hospital-logo.png" alt="Hospital Logo" />
        </div>

        <!-- order summary -->
        <div class="order-summary" id="order-summary"></div>

        <!-- terms and conditions -->
        <div class="terms">
            <h3>Radiotherapy Treatment Cost Estimation Terms and Conditions </h3>
            <p><strong>1. Cost Estimation:</strong><br>
                • The cost estimation provided is based on the information provided by the Clinical Oncologist.<br>
                • Actual treatment charges may vary depending on the services rendered during the course of treatment.
            </p>

            <p><strong>2. Variation in Charges:</strong><br>
                • The total charges for radiotherapy may differ from the initial estimate due to factors such as changes
                in treatment plan, additional procedures required, or unforeseen medical circumstances.<br>
                • Any variations in charges will be communicated to the patient promptly, along with an explanation for
                the discrepancy.</p>

            <p><strong>3. Non-Refundable Charges:</strong><br>
                • CT Simulation and Treatment Planning charges are non-refundable, regardless of whether the patient
                decides to proceed with the treatment after completion of these services.<br>
                • Patients will be informed of the non-refundable nature of these charges prior to scheduling CT
                Simulation and Treatment Planning.</p>

            <p><strong>4. Billing and Payment:</strong><br>
                • An itemized bill detailing all charges will be provided to the patient upon completion of
                treatment.<br>
                • Payment is due within the specified timeframe indicated on the bill.<br>
                • Payment options, including installment plans or financial assistance programs, may be available upon
                request.</p>

            <p><strong>5. Patient Responsibility:</strong><br>
                • It is the patient's responsibility to review the treatment cost estimation and seek clarification on
                any aspect they do not understand.<br>
                • Patients are encouraged to communicate any changes in their financial circumstances that may affect
                their ability to meet their financial obligations.</p>

            <p><strong>6. Agreement Acknowledgment:</strong><br>
                • By signing below, I acknowledge that I have read and understood the terms and conditions outlined
                above regarding the cost estimation for radiotherapy.<br>
                • I understand that the total charges may vary from the initial estimate and that CT Simulation and
                Treatment Planning charges are non-refundable.<br>
                • I agree to comply with the billing and payment procedures outlined by Gleneagles Hospital Kuala
                Lumpur.</p>

        </div>

        <!-- signature section -->
        <div style="margin-top: 20px;">
            <div style="float: left; width: 50%;"> <!--edit signature line-->
                <div style="border-bottom: 1px solid #333; height: 40px;"></div>
                <p>Patient/Next of Kin/Relative Signature</p>
            </div>
            <div style="float: right; width: 200px;"> <!--edit date line, thickness-->
                <div style="border-bottom: 1px solid #333; height: 40px;"></div>
                <p>Date and Time</p>
            </div>
            <div style="clear: both;"></div>
        </div>
    </div>
</body>

</html>
`;

// Selected services
let selectedServices = [];

// Helper function to format currency, without return 'RM'
function formatCurrency(amount) {
    const num = Number(amount) || 0;
    return num.toFixed(2);
}

// Function to update all display elements (always show all items)
function updateDisplay(totals) {
    const estimationDetails = document.getElementById('estimation-details');
    estimationDetails.innerHTML = '';

    // Add simulation and planning items
    const simulationDiv = document.createElement('div');
    simulationDiv.innerHTML = `<h3>I. CT SIMULATION AND TREATMENT PLANNING</h3>`;
    estimationDetails.appendChild(simulationDiv);

    // Planning section items (always show all)
    const planningItems = [
        { id: 'ct-scanning', name: "CT SCANNING", value: totals.ctScanning },
        { id: 'contrast', name: "CONTRAST", value: totals.contrast },
        { id: 'immobilization', name: "IMMOBILIZATION DEVICES", value: totals.immobilization },
        { id: 'motion-management', name: "MOTION MANAGEMENT (4D CT, DIBH)", value: totals.motionManagement },
        { id: 'treatment-planning', name: "TREATMENT PLANNING", value: totals.treatmentPlanning },
        { id: 'patient-plan-check', name: "PATIENT PLAN CHECK", value: totals.patientPlanCheck },
        { id: 'oncologist-fee', name: "ONCOLOGIST PROFESSIONAL FEE", value: totals.oncologistFee },
        { id: 'consumables', name: "CONSUMABLES", value: totals.consumables }
    ];

    planningItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'order-item';
        itemDiv.innerHTML = `<span>${item.name}</span><span>${formatCurrency(item.value)}</span>`;
        estimationDetails.appendChild(itemDiv);
    });

    // Add planning total
    const planningTotalDiv = document.createElement('div');
    planningTotalDiv.className = 'order-item';
    planningTotalDiv.innerHTML = `
        <span>Total</span>
        <span style="text-align: right;">${formatCurrency(totals.planningTotal)}</span>
    `;
    estimationDetails.appendChild(planningTotalDiv);

    // Add treatment items
    const treatmentDiv = document.createElement('div');
    treatmentDiv.innerHTML = `<h3 style="margin-top: 5px;">II. TREATMENT</h3>`;
    estimationDetails.appendChild(treatmentDiv);

    // Treatment section items (always show all)
    const treatmentItems = [
        { id: 'radiation-treatment', name: "RADIATION TREATMENT", value: totals.radiationTreatment },
        { id: 'treatment-verification', name: "TREATMENT VERIFICATION", value: totals.treatmentVerification },
        { id: 'respiratory-gating', name: "4D CT RESPIRATORY GATING", value: totals.respiratoryGating }
    ];

    treatmentItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'order-item';
        itemDiv.innerHTML = `<span>${item.name}</span><span>${formatCurrency(item.value)}</span>`;
        estimationDetails.appendChild(itemDiv);
    });

    // Add treatment total
    const treatmentTotalDiv = document.createElement('div');
    treatmentTotalDiv.className = 'order-item';
    treatmentTotalDiv.innerHTML = `
        <span>Total</span>
        <span style="text-align: right;">${formatCurrency(totals.treatmentTotal)}</span>
    `;
    estimationDetails.appendChild(treatmentTotalDiv);

    // Update grand total
    document.querySelector('.order-total').innerHTML = `
    <span class="order-total-label">Grand Total:</span>
    <span class="order-total-amount" style="text-align: right;">${formatCurrency(totals.grandTotal)}</span>
`;
}
function addButtonEvents(button, callback) {
    button.addEventListener('click', callback);
    button.addEventListener('touchstart', function (e) {
        e.preventDefault();
        callback();
    });
}

function displayDataInTable(data, tableId) {
    const targetElement = document.getElementById(tableId);

    data.forEach(service => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';

        const nameDiv = document.createElement('div');
        nameDiv.className = 'item-name';
        nameDiv.textContent = service.name;

        const codeDiv = document.createElement('div');
        codeDiv.className = 'item-code';
        codeDiv.textContent = service.code;
        nameDiv.appendChild(codeDiv);

        const priceDiv = document.createElement('div');
        priceDiv.className = 'item-price';
        priceDiv.textContent = `RM ${service.price.toFixed(2)}`;

        const quantityDiv = document.createElement('div');
        quantityDiv.className = 'quantity-control';

        const minusBtn = document.createElement('button');
        minusBtn.className = 'quantity-btn';
        minusBtn.textContent = '-';
        minusBtn.addEventListener('click', () => updateQuantity(service, -1));

        minusBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            updateQuantity(service, -1);
        });

        const quantityInput = document.createElement('input');
        quantityInput.className = 'quantity';
        quantityInput.type = 'text';
        quantityInput.value = '0';
        quantityInput.readOnly = true;

        const plusBtn = document.createElement('button');
        plusBtn.className = 'quantity-btn';
        plusBtn.textContent = '+';
        plusBtn.addEventListener('click', () => updateQuantity(service, 1));

        plusBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            updateQuantity(service, 1);
        });

        quantityDiv.appendChild(minusBtn);
        quantityDiv.appendChild(quantityInput);
        quantityDiv.appendChild(plusBtn);

        itemDiv.appendChild(nameDiv);
        itemDiv.appendChild(priceDiv);
        itemDiv.appendChild(quantityDiv);

        targetElement.appendChild(itemDiv);
    });
}

// Update quantity for a service
function updateQuantity(service, change) {
    const existingIndex = selectedServices.findIndex(item => item.code === service.code);
    let newQuantity = 0;

    if (existingIndex >= 0) {
        newQuantity = selectedServices[existingIndex].quantity + change;
        if (newQuantity <= 0) {
            selectedServices.splice(existingIndex, 1);
        } else {
            selectedServices[existingIndex].quantity = newQuantity;
        }
    } else if (change > 0) {
        newQuantity = change;
        selectedServices.push({
            ...service,
            quantity: newQuantity
        });
    }

    // Update the UI
    const quantityInputs = document.querySelectorAll('.quantity');
    quantityInputs.forEach(input => {
        const menuItem = input.closest('.menu-item');
        const codeElement = menuItem.querySelector('.item-code');
        if (codeElement && codeElement.textContent === service.code) {
            input.value = newQuantity > 0 ? newQuantity : '0';
        }
    });
}

// Calculate total cost (always calculate all items)
function calculateTotal(services) {
    const totals = {
        ctScanning: 0,
        contrast: 0,
        immobilization: 0,
        motionManagement: 0,
        treatmentPlanning: 0,
        patientPlanCheck: 0,
        oncologistFee: 0,
        consumables: 0,
        planningTotal: 0,
        radiationTreatment: 0,
        treatmentVerification: 0,
        respiratoryGating: 0,
        treatmentTotal: 0,
        grandTotal: 0
    };

    // CT Simulation and Treatment Planning
    const simulationItems = [
        { codes: ["SONHY00169"], total: 'ctScanning' },
        { codes: ["SPSLD00073", "SDSEQ00021"], total: 'contrast' },
        { codes: ["SONMM00004"], total: 'immobilization' },
        { codes: ["SONHY00247"], total: 'motionManagement' },
        { codes: ["SONHY00157", "SONHY00158", "SONHY00250", "SONHY00270", "SONHY00130", "SONHY00164"], total: 'treatmentPlanning' },
        { codes: ["SEQFL00004", "SONHY00251", "SEQFL00001"], total: 'patientPlanCheck' },
        { codes: ["SD3CY00413", "SD2AQ03557", "SD2AQ03558", "SFEAJ00143", "SD3CY00253", "SD2AQ00427", "SD2AQ00428", "SD3CY00252", "SD2AQ00425", "SD2AQ00426"], total: 'oncologistFee' },
        { codes: ["NMSGM00265", "NMSGM00264"], total: 'consumables' }
    ];

    // Radiation Treatment
    const treatmentItems = [
        { codes: ["SONHY00159", "SONHY00154", "SONHY00160", "SONHY00155", "SONHY00161", "SONHY00156", "SONHY00184", "SONHY00131", "SONHY00128", "SONHY00132", "SONHY00129", "SONHY00135", "SONHY00133", "SONHY00136", "SONHY00134"], total: 'radiationTreatment' },
        { codes: ["SONHY00139", "SONHY00138"], total: 'treatmentVerification' },
        { codes: ["SONHZ00136"], total: 'respiratoryGating' }
    ];

    // Calculate all simulation and planning totals
    simulationItems.forEach(item => {
        item.codes.forEach(code => {
            const service = selectedServices.find(s => s.code === code);
            if (service) {
                totals[item.total] += service.price * service.quantity;
            }
        });
        totals.planningTotal += totals[item.total];
    });

    // Calculate all treatment totals
    treatmentItems.forEach(item => {
        item.codes.forEach(code => {
            const service = selectedServices.find(s => s.code === code);
            if (service) {
                totals[item.total] += service.price * service.quantity;
            }
        });
        totals.treatmentTotal += totals[item.total];
    });

    // Calculate grand total
    totals.grandTotal = totals.planningTotal + totals.treatmentTotal;

    // Update the display with all items
    updateDisplay(totals);

    // Show order summary
    const orderSummary = document.querySelector('.order-summary');
    orderSummary.style.display = 'block';
    orderSummary.scrollIntoView({ behavior: 'smooth' });
}

function resetData() {
    // Reset selected services
    selectedServices = [];
    // Reset all quantity inputs to 0
    const quantityInputs = document.querySelectorAll('.quantity');
    quantityInputs.forEach(input => {
        input.value = '0';
    });
    // Reset all totals to 0
    const totals = {
        ctScanning: 0,
        contrast: 0,
        immobilization: 0,
        motionManagement: 0,
        treatmentPlanning: 0,
        patientPlanCheck: 0,
        oncologistFee: 0,
        consumables: 0,
        planningTotal: 0,
        radiationTreatment: 0,
        treatmentVerification: 0,
        respiratoryGating: 0,
        treatmentTotal: 0,
        grandTotal: 0
    };
    // Update the display with all items
    updateDisplay(totals);

    // set order summary to hidden
    document.querySelector('.order-summary').style.display = 'none';
    // scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getData() {
    // This function is a placeholder for loading data from a JSON file.
    // In a real application, you would use fetch or XMLHttpRequest to load the data.
    // For this example, we will just return a promise that resolves with the sample data.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
}

function printEstimate() {
    calculateTotal(data);
    const parser = new DOMParser();
    const doc = parser.parseFromString(printableHtml, 'text/html');
    const orderSummary = document.querySelector('.order-summary');
    const orderSummaryClone = orderSummary.cloneNode(true);
    const orderSummaryContainer = doc.getElementById('order-summary');
    orderSummaryContainer.appendChild(orderSummaryClone);
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(doc.documentElement.outerHTML);
    printWindow.document.close();
    printWindow.onload = function () {
        // Wait for the content to load before printing
        printWindow.focus();
        printWindow.print();
    };
}

function initSiteApp() {
    getData().then((data) => {
        const consultant = data.consultant;
        const planning1 = data.planning1;
        const planning2 = data.planning2;
        const treatment = data.treatment;

        // You can now use this data to populate your UI or perform calculations
        // For example, you can create a function to display the data in a table
        displayDataInTable(consultant, 'consultant-fees');
        displayDataInTable(planning1, 'planning-fee-1');
        displayDataInTable(planning2, 'planning-fee-2');
        displayDataInTable(treatment, 'radiation-treatment');

        addButtonEvents(document.getElementById('calculate-btn'), () => calculateTotal(data));
        addButtonEvents(document.getElementById('reset-btn'), resetData);
        addButtonEvents(document.getElementById('print-btn'), printEstimate);
    });
}

// Initialize the app when the page loads
window.addEventListener('DOMContentLoaded', initSiteApp);
