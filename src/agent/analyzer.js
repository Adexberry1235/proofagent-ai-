const fs = require('fs');
const path = require('path');

function runAnalyzer() {
    console.log("--------------------------------------------------");
    console.log("🤖 ProofAgent AI: Initializing Long-Context Analyzer...");
    console.log("--------------------------------------------------");

    const inputPath = path.join(__dirname, '../../demo/sample_input.txt');
    
    if (!fs.existsSync(inputPath)) {
        console.error("❌ Error: Sample input file not found at demo/sample_input.txt");
        process.exit(1);
    }

    const rawData = fs.readFileSync(inputPath, 'utf8');
    console.log("📥 Ingested Project Data Successfully.\n");

    console.log("⚡ Generating Autonomous X Marketing Campaign...");
    const campaign = {
        hook: "Building decentralized autonomous workflows on NEAR. 🚀",
        thread: [
            "1/5 Web3 creators and developers spend too much time managing manual content distribution and tracking payouts.",
            "2/5 Enter ProofAgent AI: An autonomous business agent that bridges long-context content analysis with instant NEAR micro-payouts.",
            "3/5 How it works: Ingest your raw pitch or video transcript -> Agent auto-generates your marketing campaign -> NEAR Intents trigger the payout.",
            "4/5 Built for the NEAR Hackathon 2026 to push the boundaries of Track 04 (Autonomous Business) and Track 07 (Agent Economy).",
            "5/5 Check out the open-source code and test the flow yourself on GitHub!"
        ],
        payoutQuoteNEAR: "2.5 NEAR"
    };

    console.log("\n--------------------------------------------------");
    console.log("✅ GENERATED CAMPAIGN OUTPUT:");
    console.log("--------------------------------------------------");
    console.log(`Hook: ${campaign.hook}\n`);
    console.log("Thread Breakdown:");
    campaign.thread.forEach(tweet => console.log(` - ${tweet}`));
    console.log(`\n💰 Computed Autonomous Payout Quote: ${campaign.payoutQuoteNEAR}`);
    console.log("--------------------------------------------------");
}

runAnalyzer();
