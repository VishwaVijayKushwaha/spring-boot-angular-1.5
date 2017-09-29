package in.vv.ex.demo.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.vv.ex.demo.app.pojo.Member;

@RestController
@RequestMapping("/api/member")
public class RequestController {
	
	private static List<Member> members = new ArrayList<>();
	
	@RequestMapping("/all")
    public List<Member> getAllMembers() {
        return members;
    }
	
	@RequestMapping("/add") 
	public void addMember(@RequestBody Member member) {
		members.add(member);
	}
}
