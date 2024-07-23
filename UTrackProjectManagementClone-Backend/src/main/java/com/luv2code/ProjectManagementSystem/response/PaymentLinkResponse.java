package com.luv2code.ProjectManagementSystem.response;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentLinkResponse {

    private String payment_link_url;
    private String payment_link_id;
}
