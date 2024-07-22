import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface UserSearchProps {
  searchName: string;
  searchSurname: string;
  searchNationalId: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
  setSearchSurname: React.Dispatch<React.SetStateAction<string>>;
  setSearchNationalId: React.Dispatch<React.SetStateAction<string>>;
}

const UserSearch: React.FC<UserSearchProps> = ({
  searchName,
  searchSurname,
  searchNationalId,
  setSearchName,
  setSearchSurname,
  setSearchNationalId,
}) => {
  return (
    <div className="accordion mt-3 w-75" id="userSearchAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="btn d-flex align-items-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={{ textAlign: "right", padding: "10px 15px" }}
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ marginRight: "10px" }}
              className="ms-1"
            />
            جستجو
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#userSearchAccordion"
        >
          <div className="accordion-body">
            <div className="d-flex flex-column flex-md-row align-items-start mb-3">
              <input
                type="text"
                className="form-control mb-2 mb-md-0 me-md-2"
                placeholder="نام"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                style={{ maxWidth: "250px" }}
              />
              <input
                type="text"
                className="form-control mb-2 mb-md-0 me-md-2"
                placeholder="نام خانوادگی"
                value={searchSurname}
                onChange={(e) => setSearchSurname(e.target.value)}
                style={{ maxWidth: "250px" }}
              />
              <input
                type="text"
                className="form-control mb-2 mb-md-0 me-md-2"
                placeholder="کد ملی"
                value={searchNationalId}
                onChange={(e) => setSearchNationalId(e.target.value)}
                style={{ maxWidth: "250px" }}
              />
              <button className="btn btn-primary me-2">جستجو</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
