function calculatePremium() {
        const basePrice = parseFloat(document.getElementById('productType').value);
        let totalPremium = basePrice;

        const age = parseInt(document.getElementById('age').value);
        const smoking = document.getElementById('smoking').value.toLowerCase();
        const drinking = document.getElementById('drinking').value.toLowerCase();
        const occupation = document.getElementById('occupation').value.toLowerCase();
        const preExisting = document.getElementById('preExisting').value.toLowerCase();
        const beneficiaries = parseInt(document.getElementById('beneficiaries').value);

        // Age calculation
        if (age >= 18 && age <= 60) {
            totalPremium += 0.20;
        } else if (age >= 61) {
            totalPremium += 0.25;
        }

        // Lifestyle calculation
        if (smoking === 'yes') {
            totalPremium += 0.10;
        }
        if (drinking === 'yes') {
            totalPremium += 0.15;
        }

        // Occupation risk calculation
        if (occupation === 'low') {
            totalPremium += 0.05;
        } else if (occupation === 'average') {
            totalPremium += 0.08;
        } else if (occupation === 'high') {
            totalPremium += 0.10;
        }

        // Pre-existing condition calculation
        if (preExisting === 'yes' && beneficiaries > 1) {
            totalPremium += 0.30;
        }

        // Final premium calculation
        if (beneficiaries > 1) {
            totalPremium *= beneficiaries;
        }

        document.getElementById('result').innerText = `Total Premium: $${totalPremium.toFixed(2)}`;
    }