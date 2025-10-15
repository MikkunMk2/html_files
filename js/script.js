const SERVER_FILE_URL = 'data.txt'; 
const loadBtn = document.getElementById('button');
const contentDiv = document.getElementById('result');

loadBtn.addEventListener('click', async () => {
    try {
        // fetch APIを使ってサーバーからテキストファイルを取得
        const response = await fetch(SERVER_FILE_URL);

        // レスポンスが正常かチェック
        if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
        }

        // レスポンスボディをテキストとして取得
        const fileContent = await response.text();

        contentDiv.textContent = fileContent;
        console.log('サーバーファイルの内容:', fileContent);

    } catch (error) {
        console.error('サーバーファイルの読み込みに失敗しました:', error);
        contentDiv.textContent = `エラー: サーバーファイルの読み込みに失敗しました。詳細: ${error.message}`;
    }
});