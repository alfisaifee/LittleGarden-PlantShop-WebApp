import React, { useState } from "react";
import {
  List,
  ListItemText,
  ListItem,
  Collapse,
  Checkbox,
  Typography,
  Button,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import useStyles from "./styles";

const FilterColumn = ({ selectedOptions, handleCheck, handleClick }) => {
  const filterOptions = [
    {
      id: 0,
      name: "Indoor Light",
      value: "indoorLight",
      options: [
        { name: "Low/Artifical", value: "low" },
        { name: "Partial/Indirect", value: "medium" },
        { name: "Direct Sunlight", value: "high" },
      ],
    },
    {
      id: 1,
      name: "Plant Size",
      value: "size",
      options: [
        { name: "Extra Small", value: "xs" },
        { name: "Small", value: "s" },
        { name: "Medium", value: "m" },
        { name: "Large", value: "l" },
        { name: "Extra Large", value: "xl" },
      ],
    },
    {
      id: 2,
      name: "Maintenance",
      value: "maintenance",
      options: [
        { name: "Easy", value: "e" },
        { name: "Moderate", value: "m" },
        { name: "Hard", value: "h" },
      ],
    },
    {
      id: 3,
      name: "Price",
      value: "price",
      options: [
        { name: "Under $50", value: { name: "under50", min: 0, max: 50 } },
        { name: "$50 - $100", value: { name: "50to100", min: 50, max: 100 } },
        {
          name: "$100 - $200",
          value: { name: "100to200", min: 100, max: 200 },
        },
        {
          name: "$200 and Above",
          value: { name: "200above", min: 200, max: 20000 },
        },
      ],
    },
  ];

  const classes = useStyles();

  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const handleIndexClick = (index) => {
    let indexes = [];
    if (selectedIndexes.includes(index)) {
      indexes = selectedIndexes.filter((i) => i !== index);
    } else {
      indexes = [...selectedIndexes, index];
    }
    setSelectedIndexes(indexes);
  };

  const handleResetClick = async () => {
    handleClick();
    setSelectedIndexes([]);
  };

  return (
    <div className={classes.filterRoot}>
      <List>
        {filterOptions.map((filterOption) => {
          return (
            <List
              key={filterOption.id}
              className={classes.filterOptionContainer}
            >
              <ListItem
                button
                onClick={() => handleIndexClick(filterOption.id)}
              >
                <ListItemText
                  primary={
                    <Typography className={classes.filterOptionText}>
                      {filterOption.name}
                    </Typography>
                  }
                />
                {selectedIndexes.includes(filterOption.id) ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItem>
              <Collapse
                in={selectedIndexes.includes(filterOption.id)}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {filterOption.options.map((sub) => {
                    return (
                      <ListItem button>
                        <Checkbox
                          checked={
                            filterOption.value !== "price"
                              ? selectedOptions[filterOption.value].includes(
                                  sub.value
                                )
                              : selectedOptions["price"].length > 0 &&
                                selectedOptions["price"][0].name ===
                                  sub.value.name
                          }
                          onChange={() =>
                            handleCheck(sub.value, filterOption.value)
                          }
                        />
                        <Typography>{sub.name}</Typography>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          );
        })}
      </List>
      <Button className={classes.resetButton} onClick={handleResetClick}>
        Reset Filters
      </Button>
    </div>
  );
};

export default FilterColumn;
