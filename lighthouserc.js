module.exports = {
    ci: {
      collect: {
        // staticDistDir: "./build",
        url: ["http://localhost:3000/", "http://localhost:3000/second" ],
        startServerCommand: "npm run start", // 서버를 키는 명령어를 통해서도 실행 가능
        settings: {
            chromeFlags: "--no-sandbox --headless"
        },
        numberOfRuns: 5,
          },
      upload: {
        target: 'filesystem',
        outputDir: './lhci_reports',
        reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
      },
    },
  };