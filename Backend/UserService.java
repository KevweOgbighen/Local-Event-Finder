import java.sql.*;

public class UserService {
    public static boolean signUp(User user) {
        String query = "INSERT INTO user (userfname, userlname, userpassword, useremail, userlocation, userinsta) VALUES (?, ?, ?, ?, ?, ?)";
        
        try (Connection con = Database.connect();
             PreparedStatement pstmt = con.prepareStatement(query)) {
            
            pstmt.setString(1, user.getUserfname());
            pstmt.setString(2, user.getUserlname());
            pstmt.setString(3, user.getUserpassword());
            pstmt.setString(4, user.getUseremail());
            pstmt.setString(5, user.getUserlocation());
            pstmt.setString(6, user.getUserinsta());
            pstmt.executeUpdate();
            return true;
            
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static User login(String email, String password) {
        String query = "SELECT * FROM user WHERE useremail = ? AND userpassword = ?";
        
        try (Connection con = Database.connect();
             PreparedStatement pstmt = con.prepareStatement(query)) {
            
            pstmt.setString(1, email);
            pstmt.setString(2, password);
            ResultSet rs = pstmt.executeQuery();
            
            if (rs.next()) {
                int userid = rs.getInt("userid");
                String fname = rs.getString("userfname");
                String lname = rs.getString("userlname");
                String loc = rs.getString("userlocation");
                String insta = rs.getString("userinsta");
                return new User(userid, fname, lname, password, email, loc, insta);
            } else {
                return null;
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static void logout(User user) {
        // Simple logout logic would be here
        if (user != null) {
            System.out.println(user.getUserfname() + " has logged out.");
        }
    }
}
