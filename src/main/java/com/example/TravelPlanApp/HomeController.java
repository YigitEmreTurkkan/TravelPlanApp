package com.example.TravelPlanApp;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        List<Country> countries = new ArrayList<>();
        countries.add(new Country("Turkey"));
        countries.add(new Country("France"));
        // İstediğiniz diğer ülkeleri ekleyin

        model.addAttribute("countries", countries);
        return "index"; // Bu, Thymeleaf şablonunuzun adı
    }
}
