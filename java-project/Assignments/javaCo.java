package Assignments;

public class JavaCo {

        protected String department;
        protected boolean active;
        protected String manager;
        protected String title;
        protected String name;
        protected java.util.Date tenure;

        public JavaCo() {
            tenure = new java.util.Date();
            department = "";
            manager = "";
            title = "";
            name = "";
        }

    public JavaCo(String department, boolean active, String manager, String title, String name) {
        this.department = department;
        this.active = active;
        this.manager = manager;
        this.title = title;
        this.name = name;
        tenure = new java.util.Date();

    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public boolean isActive () {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public java.util.Date getTenure() {
        return tenure;
    }

    public String toString() {
        return "Employee name: " + name + "\nEmployee's department: " +department + "\nTitle: " + title + "\nEmployed as of " + tenure + "\nOn leave: " + active +
                "\nManager is: " + manager;
    }
}
