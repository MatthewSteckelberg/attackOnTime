package learn.attack.models;

public class HighScore {

    private int highScoreId;
    private int highScore;
    private int userId;

    public int getHighScoreId() {
        return highScoreId;
    }

    public void setHighScoreId(int highScoreId) {
        this.highScoreId = highScoreId;
    }

    public int getHighScore() {
        return highScore;
    }

    public void setHighScore(int highScore) {
        this.highScore = highScore;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
