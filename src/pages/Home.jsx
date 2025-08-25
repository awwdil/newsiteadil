import React from "react";
</p>


<p className="fw-semibold text-danger mb-3" style={{ fontSize: "0.95rem" }}>
Limited Time Offer
</p>


<div className="d-flex align-items-center gap-3 flex-wrap">
<Link
to="/validation"
className="btn text-white fw-bold"
style={{ background: "#0064e0", borderRadius: 50, padding: "10px 28px" }}
>
Apply for Beta
</Link>
<span className="text-muted" style={{ fontSize: "0.95rem" }}>Register Now</span>
</div>


<p className="mt-4 mb-1" style={{ fontSize: "1rem" }}>
<span className="fw-semibold">Are you a business?</span> Get more information about
</p>
<Link to="/business-info" style={{ fontSize: "1rem", textDecoration: "underline" }}>
Meta Verified for Businesses
</Link>


<p className="mt-4" style={{ fontSize: "0.9rem", color: "#6c757d", fontStyle: "italic" }}>
Features, availability, and pricing may vary by region.
</p>
</div>


{/* Right image column (kept as background, fixed template literal) */}
<div className="col-12 col-lg-6 d-none d-md-block">
<div
className="w-100"
style={{
backgroundImage: `url(${test})`, // FIXED: ensure backticks/template literal
backgroundSize: "cover",
backgroundPosition: "center",
height: "70vh",
borderRadius: 12,
}}
aria-label="Hero background"
role="img"
/>
</div>
</div>
</section>
</>
);
}