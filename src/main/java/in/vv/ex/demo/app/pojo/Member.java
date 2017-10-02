package in.vv.ex.demo.app.pojo;

import java.io.Serializable;

public class Member implements Serializable {

	private static final long serialVersionUID = 7190121456572517268L;
	
	private String name;
	private String address;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "Member [name=" + name + ", address=" + address + "]";
	}
}
