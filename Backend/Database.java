import java.sql.*;

public class Database {
    private static final String URL = "jdbc:mysql://localhost:3306/localEventFinder";
    private static final String USER = "root";
    private static final String PASSWORD = "Grad2021"; // Change to your DB password
    
    public static Connection connect() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
