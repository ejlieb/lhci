module.exports = {
    ci: {
      collect: {
        // staticDistDir: "./build",
        url: ["http://localhost:3000/", "http://localhost:3000/second" ],
        startServerCommand: "npx serve -s build", // 서버를 키는 명령어를 통해서도 실행 가능
        settings: {
            chromeFlags: "--no-sandbox --headless"
        },
        numberOfRuns: 1,
          },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };