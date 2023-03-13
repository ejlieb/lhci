module.exports = {
    ci: {
      collect: {
        staticDistDir: "./build",
        // url: ["http://localhost:3000/", "http://localhost:3000/second" ],
        // startServerCommand: "npm run start", // 서버를 키는 명령어를 통해서도 실행 가능
        settings: {
            chromeFlags: "--no-sandbox --headless"
        },
        isSinglePageApplication: true,
        numberOfRuns: 5,
          },
      upload: {
        target: 'lhci',
        token:"489fea8f-34f0-411c-8634-ef252884b8f1",
        serverBaseUrl:"http://172.19.0.3:9001"
        // outputDir: './lhci_reports',
        // reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
      },
    },
  };