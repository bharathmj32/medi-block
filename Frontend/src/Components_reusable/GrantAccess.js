import React, { useState, useRef, useEffect } from "react";
import "./grantaccess.scss";

const list = [
	{ id: 1, name: "Dr. Tom" },
	{ id: 2, name: "Dr. Zeus" },
	{ id: 3, name: "DR. Jax" },
	{ id: 4, name: "Dr. Seb" },
	{ id: 5, name: "Dr. MacBook" },
];

export default function GrantAccess() {
	const [visible, setVisible] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [selectedItem, setSelectedItem] = useState([]);
	const [unselectedItem, setUnSelectedItem] = useState(list);
	const dropdownRef = useRef(null);

	const searchFilter = (searchValue, list, searchBy = "name") => {
		let lowerCaseQuery = searchValue.toLowerCase();
		let filteredList = searchValue
			? list.filter((x) => x[searchBy].toLowerCase().includes(lowerCaseQuery))
			: list;

		return filteredList;
	};
	console.log(selectedItem);

	useEffect(() => {
		document.addEventListener("mousedown", handleClick, false);
		return () => document.removeEventListener("mousedown", handleClick, false);
	}, []);

	const handleClick = (e) => {
		if (dropdownRef.current.contains(e.target)) {
			return;
		}
		setVisible(false);
	};

	const handleChange = (e) => {
		setSearchValue(e.target.value);
		if (!visible) {
			setVisible(true);
		}
	};

	const selectItem = (item) => {
		setSearchValue("");

		setSelectedItem((prevlis) => [...prevlis, item]);
		setUnSelectedItem(unselectedItem.filter((ele) => ele.id !== item.id));

		setVisible(false);
	};

	const removeItem = (item) => {
		setSelectedItem(selectedItem.filter((ele) => ele.id !== item.id));
		setUnSelectedItem((prevlis) => [...prevlis, item]);
	};

	return (
		<div className="container">
			<div tabIndex="0" className="input_container">
				<input
					className="input"
					type="text"
					placeholder="Search Doctor"
					value={searchValue}
					onChange={handleChange}
					onFocus={() => {
						// if (searchValue) {
						setVisible(true);
						// };
					}}
				/>
			</div>

			<div ref={dropdownRef} className={`dropdown ${visible ? "v" : ""}`}>
				{visible && (
					<ul>
						{!unselectedItem && (
							<li key="zxc" className="dropdown_item">
								no result
							</li>
						)}
						{/* you can remove the searchFilter if you get results from Filtered API like Google search */}
						{unselectedItem &&
							searchFilter(searchValue, unselectedItem).map((x) => (
								<li
									key={x.id}
									style={{ display: "flex", justifyContent: "space-between" }}
									className="dropdown_item"
								>
									<div className="item_text1">{x.name}</div>
									<button onClick={() => selectItem(x)}>grant access</button>
								</li>
							))}
					</ul>
				)}
			</div>
			<div>
				{selectedItem.length > 0 &&
					selectedItem.map((obj) => (
						<>
							<span>{obj.name}</span>
							<button
								style={{ cursor: "pointer" }}
								onClick={() => removeItem(obj)}
							>
								Revoke access
							</button>
							<p></p>
						</>
					))}
			</div>
		</div>
	);
}
